import pathlib,zipfile,posixpath,xml.etree.ElementTree as ET,json,hashlib
out=pathlib.Path(__file__).parent
src=out/'source-inspection'
deck=pathlib.Path(r'C:\cek\AKM II\Materi\IA_IFRS_Ch9.pptx')
records=[]
with zipfile.ZipFile(deck) as z:
 for slide in [35,37]:
  relname=f'ppt/slides/_rels/slide{slide}.xml.rels'
  for rel in ET.fromstring(z.read(relname)):
   if rel.attrib.get('Type','').endswith('/image'):
    member=posixpath.normpath(posixpath.join('ppt/slides',rel.attrib['Target']))
    filename=f'AKK202-slide{slide}-{pathlib.PurePosixPath(member).name}'
    data=z.read(member)
    (src/filename).write_bytes(data)
    records.append({'slide':slide,'member':member,'path':f'source-inspection/{filename}','sha256':hashlib.sha256(data).hexdigest(),'kind':'Original PPTX embedded source image; not website screenshot'})
book=pathlib.Path(r'C:\cek\Manajemen Keuangan\Materi\Kontrak MK 2026.xlsx')
ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
rows=[]
with zipfile.ZipFile(book) as z:
 shared=[]
 if 'xl/sharedStrings.xml' in z.namelist():
  shared=[''.join(e.itertext()) for e in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('s:si',ns)]
 for member in sorted(n for n in z.namelist() if n.startswith('xl/worksheets/sheet') and n.endswith('.xml')):
  for row in ET.fromstring(z.read(member)).findall('.//s:row',ns):
   cells=[]
   for c in row.findall('s:c',ns):
    v=c.find('s:v',ns)
    value=v.text if v is not None else ''.join(c.find('s:is',ns).itertext()) if c.find('s:is',ns) is not None else ''
    if c.attrib.get('t')=='s' and value: value=shared[int(value)]
    if value: cells.append({'cell':c.attrib.get('r'),'value':value})
   if cells: rows.append({'sheet':member,'row':row.attrib.get('r'),'cells':cells})
result={'sourceImages':records,'contractXlsx':{'path':str(book),'sha256':hashlib.sha256(book.read_bytes()).hexdigest(),'note':'XML cells only, no formula evaluation or visual review','rows':rows}}
(out/'source-assets-and-contract.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'assets':records,'contractRows':len(rows),'references':[r for r in rows if any(any(s in c['value'].lower() for s in ['brigham','ehrhardt','houston','fundamentals','financial management']) for c in r['cells'])]},ensure_ascii=False))
