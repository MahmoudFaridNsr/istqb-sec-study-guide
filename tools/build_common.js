// Shared chapter-guide assembly: cover page, contents, "how to use" box, body, header/footer.
// Each build_sec_ch<N>.js supplies its chapter metadata and calls this module.
const fs = require("fs");
const R = require("./render");
const { d, render, buildDoc, Packer, Paragraph, TextRun, AlignmentType, TableOfContents, PageBreak, table, box, NAVY, GREY, FONT } = R;
const { BorderStyle, ShadingType } = d;

const EXAM = "CT-SEC, Syllabus 2016";

module.exports = function build(meta, outArg) {
  const out = outArg || `sec-chapter-${meta.n}.docx`;
  const s1 = require(`./sec_ch${meta.n}_content1`)();
  const s2 = require(`./sec_ch${meta.n}_content2`)();
  const s3 = require(`./sec_ch${meta.n}_content3`)();

  // ---------------- cover ----------------
  const title = (t, size = 56) => new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 100 },
    children: [new TextRun({ text: t, bold: true, size, color: NAVY, font: FONT })],
  });
  const sub = (t, size = 26) => new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 90 },
    children: [new TextRun({ text: t, size, color: "2E5C9A", font: FONT })],
  });
  const rule = () => new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { before: 200, after: 260 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: NAVY, space: 1 } },
    children: [new TextRun({ text: "", size: 2 })],
  });
  const small = (t) => new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 80 },
    children: [new TextRun({ text: t, size: 17, color: GREY, font: FONT })],
  });

  const cover = [
    new Paragraph({ spacing: { after: 700 }, children: [] }),
    sub("ISTQB® Certified Tester"),
    new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 90 },
      children: [new TextRun({ text: "Advanced Level — ", size: 26, color: "2E5C9A", font: FONT }),
                 new TextRun({ text: "Security Tester", size: 26, bold: true, color: "2E5C9A", font: FONT }),
                 new TextRun({ text: ` (${EXAM})`, size: 26, color: "2E5C9A", font: FONT })],
    }),
    rule(),
    title(`CHAPTER ${meta.n}`),
    title(meta.title, meta.titleSize || 44),
    new Paragraph({ spacing: { after: 160 }, children: [] }),
    sub("Complete Study Guide"),
    rule(),
    table({
      head: ["Chapter fact", "Value"],
      widths: [3.6, 10.4],
      rows: [
        ["**Syllabus sections covered**", meta.sections],
        ["**Learning objectives**", meta.los],
        ["**Recommended teaching time**", meta.teaching],
        ["**Questions in the exam**", meta.questions],
        ["**Exam format**", "45 questions · **80 points** · **120 minutes** (150 with the 25% non-native-language allowance) · pass mark 65% = **52 points** · K2 = 1 pt · K3 = 2 pts · K4 = 3 pts"],
        ["**Keywords**", meta.keywords],
        ["**Official sample-exam questions**", meta.official],
      ],
    }),
    new Paragraph({ spacing: { after: 300 }, children: [] }),
    small("Built exclusively from the ISTQB® Advanced Level Security Tester syllabus (2016), the official"),
    small("Sample Exam (questions and answers, GA March 2016) and the ISTQB® exam structure tables."),
    new Paragraph({ spacing: { after: 120 }, children: [] }),
    small(`Study this single file to master Chapter ${meta.n}.`),
  ];

  // ---------------- body ----------------
  const body = [];
  body.push(new Paragraph({
    heading: d.HeadingLevel.HEADING_1,
    shading: { type: ShadingType.CLEAR, fill: NAVY, color: "auto" },
    spacing: { after: 200 },
    children: [new TextRun({ text: "Contents", bold: true, size: 32, color: "FFFFFF", font: FONT })],
  }));
  body.push(new TableOfContents("Contents", { hyperlink: true, headingStyleRange: "1-2" }));
  body.push(new Paragraph({
    spacing: { before: 200 },
    children: [new TextRun({ text: "In Word, right-click the table of contents and choose \"Update Field\" → \"Update entire table\" to refresh the page numbers.", size: 17, italics: true, color: GREY, font: FONT })],
  }));
  body.push(new Paragraph({ children: [new PageBreak()] }));

  body.push(box({ title: "How to use this guide", body: meta.howto }));
  body.push(new Paragraph({ children: [new PageBreak()] }));

  body.push(...render(s1));
  body.push(...render(s2));
  body.push(...render(s3));

  const doc = buildDoc({
    headerLeft: `ISTQB® Advanced Level Security Tester (${EXAM})`,
    headerRight: `Chapter ${meta.n} — Complete Study Guide`,
    footer: "Built only from the CTAL-SEC 2016 syllabus and official sample exam",
    cover,
    blocks: body,
  });

  return Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync(out, buf);
    console.log("written:", out, buf.length, "bytes");
  });
};
