import {files,mails} from '../story/seed-data.js';
const KEY='retro404_state_v1';
const base=()=>({booted:false,read:[],notes:{'/home/alex/note.txt':'New note.'},sectors:{A1:false,B2:false,C3:false},fragment:false,letterRead:false,journalRead:false,wallpaper:'teal',sound:false,crt:true,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,score:0});
export let state=load();
function load(){try{const x=JSON.parse(localStorage.getItem(KEY));return x&&x.sectors&&x.notes?{...base(),...x}:base()}catch{return base()}}
export function save(){localStorage.setItem(KEY,JSON.stringify(state));document.dispatchEvent(new Event('retro-state'))}
export function reset(){state=base();localStorage.removeItem(KEY);save()}
export function allFiles(){return {...files,...Object.fromEntries(Object.entries(state.notes).map(([p,content])=>[p,{type:'text',content,user:true}]))}}
export {mails};
