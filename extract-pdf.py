import fitz  # pymupdf
import sys

doc = fitz.open(r"Statistik\UAS STATIS 2024 (1).pdf")
for i, page in enumerate(doc):
    text = page.get_text()
    print(f"=== PAGE {i+1} ===")
    print(text)
    print()
