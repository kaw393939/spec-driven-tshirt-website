// Maintainer check for docs-only teaching widgets. Run from the repository root.
// Exercises UI state with small DOM stand-ins; does not replace browser rendering/keyboard checks.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const code = fs.readFileSync('assets/studio.js', 'utf8');
function el(dataset={}) { return {dataset, hidden:true, textContent:'', className:'', attrs:{}, handlers:{}, setAttribute(k,v){this.attrs[k]=v}, addEventListener(k,f){this.handlers[k]=f}, click(){this.handlers.click()}}; }
function boot() {
 const kinds=['explorer','creator','everyperson'].map(archetype=>el({archetype}));
 const modes=['modernist','postmodernist'].map(composition=>el({composition}));
 const brandMap=Object.fromEntries(['brand-sketch','brand-label','brand-headline','brand-copy','brand-readout','enhancement'].map(k=>[`[data-${k}]`,el()]));
 const browserMap=Object.fromEntries(['browser-headline','browser-code','browser-count','browser-change','browser-reset','enhancement'].map(k=>[`[data-${k}]`,el()]));
 const brand={querySelector:s=>brandMap[s],querySelectorAll:s=>s==='[data-archetype]'?kinds:modes};
 const browser={querySelector:s=>browserMap[s]};
 vm.runInNewContext(code,{document:{querySelector:s=>s==='[data-brand-lab]'?brand:browser}});
 return {kinds,modes,brandMap,browserMap};
}
const a=boot();
assert.equal(a.brandMap['[data-enhancement]'].hidden,false);
assert.equal(a.browserMap['[data-enhancement]'].hidden,false);
const seen=new Set();
for(const kind of a.kinds)for(const mode of a.modes){
 kind.click();mode.click();
 assert.equal(a.kinds.filter(x=>x.attrs['aria-pressed']==='true').length,1);
 assert.equal(a.modes.filter(x=>x.attrs['aria-pressed']==='true').length,1);
 assert.ok(a.brandMap['[data-brand-label]'].textContent.toLowerCase().includes(kind.dataset.archetype));
 assert.ok(a.brandMap['[data-brand-readout]'].textContent.includes(mode.dataset.composition));
 assert.ok(a.brandMap['[data-brand-readout]'].textContent.includes('not a rule'));
 seen.add(a.brandMap['[data-brand-sketch]'].className);
}
assert.equal(seen.size,6);
for(let i=1;i<=9;i++){
 a.browserMap['[data-browser-change]'].click();
 assert.ok(a.browserMap['[data-browser-count]'].textContent.includes(`Changes in this tab: ${i}.`));
 assert.equal(a.browserMap['[data-browser-code]'].textContent,`<p>${a.browserMap['[data-browser-headline]'].textContent}</p>`);
}
a.browserMap['[data-browser-reset]'].click();
assert.equal(a.browserMap['[data-browser-headline]'].textContent,'Hello, browser.');
assert.ok(a.browserMap['[data-browser-count]'].textContent.includes('Changes in this tab: 0.'));
const b=boot();b.browserMap['[data-browser-change]'].click();
assert.ok(b.browserMap['[data-browser-count]'].textContent.includes('Changes in this tab: 1.'));
assert.equal(a.browserMap['[data-browser-headline]'].textContent,'Hello, browser.');
console.log('PASS: six independent brand/composition combinations; one pressed control per group; live readout; nine browser actions; reset; fresh-instance state. No network/storage API provided or used.');
