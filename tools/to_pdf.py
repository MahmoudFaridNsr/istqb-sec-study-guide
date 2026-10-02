#!/usr/bin/env python3
"""Render guides to PDF with a populated table of contents.

`soffice --convert-to pdf` exports the TOC field empty, because nothing refreshes it.
This script drives LibreOffice over UNO instead: it opens each .docx, updates every
index (the TOC), refreshes the layout, then exports the PDF.

Usage:  python3 to_pdf.py OUTDIR file1.docx [file2.docx ...]
Needs:  LibreOffice with its Python-UNO bridge (python3 -c "import uno").
"""
import os, subprocess, sys, time
import uno
from com.sun.star.beans import PropertyValue


def prop(name, value):
    p = PropertyValue()
    p.Name, p.Value = name, value
    return p


def connect(port=2083, tries=40):
    local = uno.getComponentContext()
    resolver = local.ServiceManager.createInstanceWithContext("com.sun.star.bridge.UnoUrlResolver", local)
    for _ in range(tries):
        try:
            return resolver.resolve(f"uno:socket,host=localhost,port={port};urp;StarOffice.ComponentContext")
        except Exception:
            time.sleep(0.5)
    raise RuntimeError("could not connect to LibreOffice")


def main():
    outdir, files = sys.argv[1], sys.argv[2:]
    os.makedirs(outdir, exist_ok=True)
    port = 2083
    proc = subprocess.Popen(["soffice", "--headless", "--invisible", "--norestore", "--nologo",
                             f"--accept=socket,host=localhost,port={port};urp;"],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        ctx = connect(port)
        desktop = ctx.ServiceManager.createInstanceWithContext("com.sun.star.frame.Desktop", ctx)
        for f in files:
            url = uno.systemPathToFileUrl(os.path.abspath(f))
            doc = desktop.loadComponentFromURL(url, "_blank", 0, (prop("Hidden", True),))
            idx = doc.getDocumentIndexes()
            for _ in range(2):  # twice: the TOC's own length can shift page numbers
                for i in range(idx.getCount()):
                    idx.getByIndex(i).update()
                doc.refresh()
            pdf = os.path.join(outdir, os.path.splitext(os.path.basename(f))[0] + ".pdf")
            doc.storeToURL(uno.systemPathToFileUrl(os.path.abspath(pdf)), (prop("FilterName", "writer_pdf_Export"),))
            doc.close(True)
            print("pdf:", pdf)
    finally:
        try:
            desktop.terminate()
        except Exception:
            pass
        proc.wait(timeout=30)


if __name__ == "__main__":
    main()
