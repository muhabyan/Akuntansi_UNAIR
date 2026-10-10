import hashlib,json,pathlib,zipfile,re
import fitz
out=pathlib.Path(__file__).parent
src=out/'source-inspection'
src.mkdir(exist_ok=True)
sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
inbox=pathlib.Path(r'C:\cek\.content-inbox\AKA201')
extracted=out.parent/'20261006'/'packages'/'AKA201'
matches=[]
for p in sorted(inbox.rglob('*.md')):
    relative=p.relative_to(inbox)
    q=extracted/relative
    matches.append({'relative':relative.as_posix(),'inboxSha256':sha(p),'archiveSha256':sha(q) if q.exists() else None,'bytesEqual':q.exists() and p.read_bytes()==q.read_bytes()})
pdfs=[
 ('MNK201-book',r'C:\cek\Manajemen Keuangan\Materi\Fundamentals of Financial Management 2022.pdf'),
 ('MNK201-lecturer-CH1',r'C:\cek\Manajemen Keuangan\Materi\FFM_CH1.pdf'),
 ('AKA201-Arens',r'C:\cek\PBR I\Materi\Auditing The Art and Science of Assurance Engagements (Alvin Arens, Alvin A Arens, Randal J Elder etc.) (z-library.sk, 1lib.sk, z-lib.sk).pdf'),
 ('AKK202-RPP',r'C:\cek\AKM II\Materi\RPP AKM II.pdf'),
 ('AKA201-ISA',r'C:\cek\PBR I\Materi\IAASB-2025-Handbook-Volume-1.pdf')]
records=[]
for key,filename in pdfs:
    p=pathlib.Path(filename)
    doc=fitz.open(p)
    selected=[]
    # Front matter and contents are source-identity evidence only, not a complete semantic audit.
    for i in range(min(len(doc),22)):
        text=doc[i].get_text()
        (src/f'{key}-PDF{i+1:03d}.txt').write_text(text,encoding='utf-8')
        if (i<4 or re.search(r'contents|edition|edisi|acquisition|Aktiva Tetap|Tatap|Materi|Keuangan Menengah',text,re.I)):
            selected.append({'pdfPage':i+1,'textFile':f'source-inspection/{key}-PDF{i+1:03d}.txt','snippet':text[:500]})
    records.append({'id':key,'path':filename,'sha256':sha(p),'pages':len(doc),'metadata':doc.metadata,'identityPagesExtracted':min(len(doc),22),'selected':selected})
    doc.close()
result={'purpose':'Source identity reconciliation; not website evidence or complete 56-TM source audit.',
        'aka201ArchiveVsInbox':{'files':matches,'all42Match':len(matches)==42 and all(m['bytesEqual'] for m in matches)},'pdfs':records}
(out/'source-reconciliation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'aka201FilesCompared':len(matches),'all42Match':result['aka201ArchiveVsInbox']['all42Match'],'pdfs':[{k:r[k] for k in ['id','pages','sha256']} for r in records]}))
