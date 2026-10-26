import { load } from 'cheerio';
import { join, resolve, sep } from 'node:path';
const root = resolve('dist');
const files = [...new Bun.Glob('**/*.html').scanSync(root)];
const parsed = new Map<string,ReturnType<typeof load>>();
const issues: string[]=[];
let links=0, images=0, tabs=0;
function document(path:string) { let doc=parsed.get(path); if(!doc){doc=load(require('node:fs').readFileSync(path,'utf8')); parsed.set(path,doc);} return doc; }
for (const file of files) {
  const path=join(root,file), $=document(path);
  const base='https://hakermany-wiki.github.io/'+file.replace(/index\.html$/,'');
  $('a[href],img[src],script[src],link[rel="stylesheet"][href]').each((_,el)=>{
    const value=$(el).attr('href')??$(el).attr('src'); if(!value)return;
    if(/^(?:mailto:|tel:|data:)/.test(value))return;
    const url=new URL(value,base); if(url.origin!=='https://hakermany-wiki.github.io')return;
    let local=resolve(root,'.'+decodeURIComponent(url.pathname));
    if(url.pathname.endsWith('/'))local=join(local,'index.html');
    if(!(local===root||local.startsWith(root+sep)))throw Error('Path escapes build');
    if(!require('node:fs').existsSync(local)){issues.push(file+' -> missing '+url.pathname);return;}
    if(el.tagName==='img')images++;else links++;
    if(el.tagName==='a' && url.hash && local.endsWith('.html')){
      const target=document(local); const id=decodeURIComponent(url.hash.slice(1));
      if(!target('[id]').toArray().some(n=>target(n).attr('id')===id))issues.push(file+' -> missing anchor '+url.pathname+url.hash);
    }
  });
  $('.wiki-tabs').each((_,el)=>{
    const group=$(el); const buttons=group.find('> [role="tablist"] > button'); const panels=group.find('> [role="tabpanel"]');
    if(!buttons.length||buttons.length!==panels.length)issues.push(file+' -> invalid tabs');
    tabs++;
  });
  if(/\{\.tabset\}/.test($('.sl-markdown-content').clone().find('pre,code').remove().end().text()))issues.push(file+' -> unconverted tabset');
}
console.log(JSON.stringify({html:files.length,internalReferences:links,images,tabsets:tabs,issues},null,2));
if(issues.length)process.exit(1);
