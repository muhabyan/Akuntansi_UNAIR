import fitz  # pymupdf

doc = fitz.open(r"Statistik\UAS STATIS 2024 (1).pdf")

# Check if pages have images
for i in range(min(3, len(doc))):
    page = doc[i]
    images = page.get_images(full=True)
    text = page.get_text().strip()
    print(f"Page {i+1}: text_len={len(text)}, images={len(images)}")
    
    # Try to extract text with different options
    text2 = page.get_text("text")
    text3 = page.get_text("dict")
    blocks = text3.get("blocks", [])
    print(f"  blocks: {len(blocks)}")
    for b in blocks[:3]:
        if b.get("type") == 0:  # text block
            for line in b.get("lines", [])[:2]:
                spans = line.get("spans", [])
                for s in spans[:2]:
                    print(f"    span text: '{s.get('text', '')[:80]}'")
        elif b.get("type") == 1:  # image block
            print(f"    image block: {b.get('width')}x{b.get('height')}")
