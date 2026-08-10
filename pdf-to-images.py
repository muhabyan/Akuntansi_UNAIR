import fitz

doc = fitz.open(r"Statistik\UAS STATIS 2024 (1).pdf")
import os
os.makedirs("pdf-pages", exist_ok=True)

for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(dpi=200)
    pix.save(f"pdf-pages/page_{i+1:02d}.png")
    print(f"Saved page {i+1}")

print(f"Total pages: {len(doc)}")
