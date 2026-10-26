const text = n => n.value ?? (n.children || []).map(text).join('');
const escape = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const html = value => ({ type: 'html', value });

/** Convert Wiki.js tabsets and formatting at the AST level; never touch fenced examples. */
export default function wikiMarkdown() {
  return tree => {
    let sequence = 0;
    const convert = nodes => {
      const out = [];
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.type === 'heading' && /\{\.tabset\}/.test(text(n))) {
          const end = nodes.findIndex((v,j) => j > i && v.type === 'heading' && v.depth <= n.depth);
          const stop = end === -1 ? nodes.length : end;
          const tabs = []; let active;
          for (const child of nodes.slice(i + 1, stop)) {
            if (child.type === 'heading' && child.depth === n.depth + 1) { active = { title: text(child).replace(/\{[^}]+\}/g,'').trim(), children: [] }; tabs.push(active); }
            else if (active) active.children.push(child); else out.push(child);
          }
          if (tabs.length) {
            const id = 'tabs-' + ++sequence;
            out.push(html(`<div class="wiki-tabs"><div role="tablist" aria-label="Content tabs">${tabs.map((t,j) => `<button type="button" role="tab" id="${id}-${j}" aria-controls="${id}-panel-${j}" aria-selected="false">${escape(t.title)}</button>`).join('')}</div>`));
            tabs.forEach((t,j) => out.push(html(`<section role="tabpanel" id="${id}-panel-${j}" aria-labelledby="${id}-${j}">`), ...convert(t.children), html('</section>')));
            out.push(html('</div>'));
          }
          i = stop - 1; continue;
        }
        if (n.type === 'paragraph' && /^\{(?:\.[\w-]+\s*)+\}$/.test(text(n).trim())) {
          const previous = out.at(-1);
          if (previous) { previous.data ??= {}; previous.data.hProperties ??= {}; previous.data.hProperties.className = [...text(n).matchAll(/\.([\w-]+)/g)].map(m=>m[1]); }
          continue;
        }
        if (n.type === 'code' && n.lang === 'mermaid') { out.push(html(`<pre class="mermaid">${escape(n.value)}</pre>`)); continue; }
        if (n.type === 'text') n.value = n.value.replace(/\s*\{(?:\.[\w-]+\s*)+\}\s*$/g, '');
        if (n.type === 'heading' && n.depth === 1) n.depth = 2;
        if (n.children) n.children = convert(n.children);
        out.push(n);
      }
      return out;
    };
    tree.children = convert(tree.children);
  };
}
