import os
import sys

def check_pdf(filename):
    # Just try to see if it exists and maybe its size
    print(f"{filename}: {os.path.getsize(filename)} bytes")

check_pdf(r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\80287752-bb0e-4547-a57c-38f53e0f1a42\.tempmediaStorage\media_80287752-bb0e-4547-a57c-38f53e0f1a42_1782756493564.pdf")
check_pdf(r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\80287752-bb0e-4547-a57c-38f53e0f1a42\.tempmediaStorage\media_80287752-bb0e-4547-a57c-38f53e0f1a42_1782758605800.pdf")

try:
    import pypdf
    for f in [r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\80287752-bb0e-4547-a57c-38f53e0f1a42\.tempmediaStorage\media_80287752-bb0e-4547-a57c-38f53e0f1a42_1782756493564.pdf",
              r"C:\Users\Lenovo\.gemini\antigravity-ide\brain\80287752-bb0e-4547-a57c-38f53e0f1a42\.tempmediaStorage\media_80287752-bb0e-4547-a57c-38f53e0f1a42_1782758605800.pdf"]:
        reader = pypdf.PdfReader(f)
        page = reader.pages[0]
        text = page.extract_text()
        print(f"--- {os.path.basename(f)} ---")
        print(text[:200])
except Exception as e:
    print("Could not extract text:", e)
