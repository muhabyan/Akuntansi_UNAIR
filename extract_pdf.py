import sys
try:
    from pypdf import PdfReader
    reader = PdfReader("C:/cek/Salinan 11_Money and Financial System.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open("C:/cek/pdf_11_out.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Parsed successfully")
except Exception as e:
    print(f"Error: {e}")
