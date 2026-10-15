#!/usr/bin/env python3
"""Render guides to PDF with a populated table of contents.

`soffice --convert-to pdf` exports the TOC field empty, because nothing refreshes it.
This script runs a small Python macro *inside* LibreOffice instead: it opens each .docx,
updates every index (the TOC) twice, refreshes the layout, then exports the PDF.

Because the macro runs in LibreOffice's own Python, the system Python does not need the
UNO bridge (`import uno`). This matters on macOS, where the bundled Python binary cannot be
started on its own. The macro is installed into a throw-away LibreOffice user profile, so
the user's own profile is never touched.

Usage:  python3 to_pdf.py OUTDIR file1.docx [file2.docx ...]
Needs:  LibreOffice (`soffice` on PATH, or set SOFFICE=/path/to/soffice).
"""
import os, shutil, subprocess, sys, tempfile

MACRO = r'''
import os, uno
from com.sun.star.beans import PropertyValue

def prop(name, value):
    p = PropertyValue()
    p.Name, p.Value = name, value
    return p

def main(*args):
    outdir = os.environ["TOPDF_OUT"]
    files = os.environ["TOPDF_FILES"].split("\n")
    ctx = XSCRIPTCONTEXT.getComponentContext()
    desktop = ctx.ServiceManager.createInstanceWithContext("com.sun.star.frame.Desktop", ctx)
    with open(os.environ["TOPDF_LOG"], "a") as log:
        for f in files:
            doc = desktop.loadComponentFromURL(uno.systemPathToFileUrl(f), "_blank", 0, (prop("Hidden", True),))
            idx = doc.getDocumentIndexes()
            for _ in range(2):  # twice: the TOC's own length can shift page numbers
                for i in range(idx.getCount()):
                    idx.getByIndex(i).update()
                doc.refresh()
            pdf = os.path.join(outdir, os.path.splitext(os.path.basename(f))[0] + ".pdf")
            doc.storeToURL(uno.systemPathToFileUrl(pdf), (prop("FilterName", "writer_pdf_Export"),))
            doc.close(True)
            log.write("pdf: " + pdf + "\n")
    desktop.terminate()
'''


def find_soffice():
    for cand in (os.environ.get("SOFFICE"), shutil.which("soffice"), shutil.which("libreoffice"),
                 "/Applications/LibreOffice.app/Contents/MacOS/soffice"):
        if cand and os.path.exists(cand):
            return cand
    sys.exit("LibreOffice not found: install it or set SOFFICE=/path/to/soffice")


def main():
    outdir, files = os.path.abspath(sys.argv[1]), [os.path.abspath(f) for f in sys.argv[2:]]
    os.makedirs(outdir, exist_ok=True)
    profile = tempfile.mkdtemp(prefix="topdf-profile-")
    try:
        scripts = os.path.join(profile, "user", "Scripts", "python")
        os.makedirs(scripts)
        with open(os.path.join(scripts, "topdf.py"), "w") as fh:
            fh.write(MACRO)
        log = os.path.join(profile, "topdf.log")
        env = dict(os.environ, TOPDF_OUT=outdir, TOPDF_FILES="\n".join(files), TOPDF_LOG=log)
        subprocess.run([find_soffice(), f"-env:UserInstallation=file://{profile}", "--headless", "--invisible",
                        "--norestore", "--nologo", "vnd.sun.star.script:topdf.py$main?language=Python&location=user"],
                       env=env, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False, timeout=1800)
        done = open(log).read() if os.path.exists(log) else ""
        print(done, end="")
        if done.count("pdf: ") != len(files):
            sys.exit(f"only {done.count('pdf: ')} of {len(files)} PDFs were written")
    finally:
        shutil.rmtree(profile, ignore_errors=True)


if __name__ == "__main__":
    main()
