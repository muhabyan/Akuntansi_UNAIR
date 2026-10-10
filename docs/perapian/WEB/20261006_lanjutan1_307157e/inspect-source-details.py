import json,pathlib,re,zipfile,xml.etree.ElementTree as ET,hashlib
import fitz
out=pathlib.Path(__file__).parent
src=out/'source-inspection'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
slide_records=[]
ns={'a':'http://schemas.openxmlformats.org/drawingml/2006/main'}
for folder in [pathlib.Path(r'C:\cek\Manajemen Keuangan\Materi'),pathlib.Path(r'C:\cek\AKM II\Materi')]:
 for p in sorted(folder.glob('*.pptx')):
  with zipfile.ZipFile(p) as z:
   names=sorted([n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide\d+\.xml',n)],key=lambda n:int(re.search(r'slide(\d+)',n).group(1)))
   texts=['\n'.join(x.text or '' for x in ET.fromstring(z.read(n)).findall('.//a:t',ns)) for n in names]
   selected={str(i+1):t for i,t in enumerate(texts) if i<2 or (p.name=='IA_IFRS_Ch9.pptx' and (33<=i+1<=37 or 54<=i+1<=66))}
   for number,text in selected.items():
    (src/f'{p.stem}-slide{int(number):03d}.txt').write_text(text,encoding='utf-8')
   slide_records.append({'path':str(p),'sha256':sha(p),'slides':len(names),'selectedSlides':selected,'kind':'PPTX text extraction, not visual inspection'})
book=pathlib.Path(r'C:\AkuntansiHub-Content-Agent\course-sources\AKK202\shared\assigned-textbook\Intermediate Accounting IFRS 5th Edition (Donald Kieso) (z-library.sk, 1lib.sk, z-lib.sk)_compressed.pdf')
doc=fitz.open(book)
for i in range(5):
 (src/f'AKK202-Kieso-identity-PDF{i+1:03d}.txt').write_text(doc[i].get_text(),encoding='utf-8')
book_record={'path':str(book),'sha256':sha(book),'pdfPages':len(doc),'identityPdfPages':[1,2,3,4,5]}
doc.close()
# Only the exact permitted-origin preference is read; other config, tokens and account data are not output.
config_record={'path':r'C:\Users\Lenovo\.codex\config.toml','origin':'http://127.0.0.1:5186','value':None}
try:
 import tomllib
 with open(config_record['path'],'rb') as f:
  config=tomllib.load(f)
 config_record['value']=config.get('browser_use',{}).get('origins',{}).get(config_record['origin'])
except Exception as error:
 config_record['readError']=str(type(error).__name__)
result={'purpose':'Source identity and exact local permission-setting read; no browser workaround or source edit.',
        'pptx':slide_records,'akk202Book':book_record,'localOriginPreference':config_record}
(out/'source-details.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pptx':[{'path':r['path'],'slides':r['slides'],'first':r['selectedSlides'].get('1','')[:250]} for r in slide_records],'book':book_record,'originPreference':config_record},ensure_ascii=False))
