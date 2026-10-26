import {sound} from '../utils/audio.js';
let z=20,windows=[];
export function createWindow({id,title,width=620,height=430,content}){
  const existing=windows.find(w=>w.dataset.id===id);if(existing){restore(existing);return existing}
  const w=document.createElement('section');w.className='window active';w.dataset.id=id;
  w.style.cssText=`width:${width}px;height:${height}px;left:${Math.min(120+windows.length*26,innerWidth-width-10)}px;top:${Math.min(65+windows.length*23,innerHeight-height-55)}px;z-index:${++z}`;
  w.innerHTML=`<header class="titlebar"><b aria-hidden="true">▣</b><span>${title}</span><div class="window-controls"><button aria-label="Minimize ${title}" data-action="min">_</button><button aria-label="Maximize ${title}" data-action="max">□</button><button aria-label="Close ${title}" data-action="close">×</button></div></header><div class="window-body"></div>`;
  w.querySelector('.window-body').append(content);document.querySelector('#os').append(w);windows.push(w);focus(w);wire(w);sound.open();return w;
}
function wire(w){
  w.addEventListener('pointerdown',()=>focus(w));const bar=w.querySelector('.titlebar');let drag;
  bar.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;drag={x:e.clientX-w.offsetLeft,y:e.clientY-w.offsetTop};bar.setPointerCapture(e.pointerId)});
  bar.addEventListener('pointermove',e=>{if(!drag)return;w.style.left=Math.max(0,Math.min(innerWidth-w.offsetWidth,e.clientX-drag.x))+'px';w.style.top=Math.max(0,Math.min(innerHeight-w.offsetHeight-42,e.clientY-drag.y))+'px'});
  bar.addEventListener('pointerup',()=>drag=null);
  w.querySelector('.window-controls').addEventListener('click',e=>{const a=e.target.dataset.action;if(a==='close'){w.remove();windows=windows.filter(x=>x!==w)}if(a==='min')w.classList.add('hidden');if(a==='max')maximize(w);sound.click();document.dispatchEvent(new Event('retro-windows'))});
}
function focus(w){windows.forEach(x=>x.classList.remove('active'));w.classList.add('active');w.style.zIndex=++z}
function maximize(w){if(w.dataset.max){Object.assign(w.style,JSON.parse(w.dataset.max));delete w.dataset.max}else{w.dataset.max=JSON.stringify({width:w.style.width,height:w.style.height,left:w.style.left,top:w.style.top});Object.assign(w.style,{left:'0px',top:'0px',width:'100%',height:'calc(100% - 42px)'})}}
export function restore(w){w.classList.remove('hidden');focus(w);sound.click()}
export function windowList(){return windows}
