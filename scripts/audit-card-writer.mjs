import fs from 'node:fs';
import ts from 'typescript';

/** Replace only post-UTS object ranges; retain original pre-UTS bytes, comments and compatibility exports. */
export function writePostUtsCards(file, cards, source=fs.readFileSync(file,'utf8')) {
  const tree=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);
  const updates=[];
  const byId=new Map(cards.map(card=>[card.id,card]));
  const property=(node,name)=>node.properties.find(p=>ts.isPropertyAssignment(p)&&p.name.getText(tree).replace(/['"]/g,'')===name)?.initializer;
  function walk(node){
    if(ts.isObjectLiteralExpression(node)){
      const id=property(node,'id'),phase=property(node,'phase');
      if(id&&phase&&ts.isStringLiteral(id)&&ts.isStringLiteral(phase)&&phase.text==='pra-uas'){
        const card=byId.get(id.text);if(!card)throw new Error(`Missing existing card ${id.text}`);
        const start=node.getStart(tree),end=node.getEnd();
        const indent=source.slice(source.lastIndexOf('\n',start)+1,start);
        const text=JSON.stringify(card,null,2).replace(/\n/g,'\n'+indent);
        updates.push({start,end,text});return;
      }
    }
    ts.forEachChild(node,walk);
  }
  walk(tree);
  if(updates.length!==cards.filter(c=>c.phase==='pra-uas').length)throw new Error(`${file}: card count changed`);
  let output=source;
  for(const u of updates.sort((a,b)=>b.start-a.start))output=output.slice(0,u.start)+u.text+output.slice(u.end);
  fs.writeFileSync(file,output);
}
