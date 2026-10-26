import {allFiles,state,save} from '../core/state.js';
import {scan,recover,hint} from '../story/recovery.js';
import {sound} from '../utils/audio.js';
const pathFor=(input,cwd)=>input.startsWith('/')?input:(cwd+'/'+input).replace(/\/+/g,'/');
const parent=p=>p==='/'?'/':p.slice(0,p.lastIndexOf('/'))||'/';
export function terminal(){
  let cwd='/home/alex',history=[],position=0;
  const el=document.createElement('div');el.className='terminal';
  el.innerHTML='<div class="terminal-output">NEON BYTE TERMINAL v0.9.8\nType \'help\' for available commands.\n\n</div><div class="terminal-line"><span></span><input aria-label="Terminal command" autocomplete="off"></div>';
  const out=el.firstChild,input=el.querySelector('input'),prompt=()=>`ALEX@RETRO404:${cwd}> `;
  const print=text=>{out.append(document.createTextNode(`${text}\n`));el.scrollTop=el.scrollHeight};
  function run(raw){
    const [cmd,...args]=raw.trim().split(/\s+/),arg=args.join(' '),fs=allFiles();
    if(!cmd)return '';
    if(cmd==='help')return 'help clear pwd ls dir cd cat tree whoami date status scan recover theme about hint';
    if(cmd==='clear'){out.textContent='';return ''}
    if(cmd==='pwd')return cwd;
    if(cmd==='ls'||cmd==='dir')return Object.entries(fs).filter(([p])=>parent(p)===cwd).map(([p,f])=>`${p.split('/').pop()}${f.type==='folder'?'/' :''}`).join('   ')||'(empty)';
    if(cmd==='cd'){const p=(pathFor(arg||'/home/alex',cwd).replace(/\/$/,''))||'/';if(fs[p]?.type==='folder'){cwd=p;return ''}return `cd: ${arg}: directory not found`}
    if(cmd==='cat'){const filePath=pathFor(arg,cwd),f=fs[filePath];if(!f)return `cat: ${arg}: not found`;if(f.type==='folder')return 'cat: target is a folder';if(filePath==='/home/alex/letters/from-mara.txt'){state.letterRead=true;save()}if(f.type==='encrypted'&&!state.sectors.B2)return 'ACCESS DENIED: recover B2 to read this journal.';if(f.type==='encrypted'){state.journalRead=true;save();return 'ALEX MORGAN — This computer was our family time capsule: games after dinner, letters from friends, and a place to keep a small part of us. Keep it safe.'}return f.content}
    if(cmd==='tree')return Object.keys(fs).filter(p=>p.startsWith(cwd)).map(p=>'  '.repeat(p.split('/').length-cwd.split('/').length)+p.split('/').pop()).join('\n');
    if(cmd==='whoami')return 'ALEX MORGAN — archive workstation owner';
    if(cmd==='date')return `ARCHIVE: 17 OCT 1998 · LIVE: ${new Date().toLocaleString()}`;
    if(cmd==='status')return `A1 ${state.sectors.A1?'RECOVERED':'MISSING'} | B2 ${state.sectors.B2?'RECOVERED':'MISSING'} | C3 ${state.sectors.C3?'RECOVERED':'MISSING'}`;
    if(cmd==='scan')return scan();if(cmd==='recover'){const result=recover(arg.toUpperCase());if(result.startsWith('SUCCESS'))sound.recover();else if(result.startsWith('ERROR'))sound.danger();return result}if(cmd==='hint')return hint();
    if(cmd==='theme'){if(['green','amber','cyan'].includes(arg)){el.style.color={green:'',amber:'#ffcc66',cyan:'#5ce1e6'}[arg];return `Theme set: ${arg}`}return 'theme: green, amber, cyan'}
    if(cmd==='about')return 'RETRO//404 Archive Edition 98 — a fictional browser simulation.';
    return `${cmd}: command not found. Try help.`;
  }
  input.addEventListener('keydown',e=>{if(e.key==='Enter'){const raw=input.value;print(prompt()+raw);if(raw)history.push(raw);position=history.length;const result=run(raw);if(result)print(result);input.value='';el.querySelector('.terminal-line span').textContent=prompt()}if(e.key==='ArrowUp'){e.preventDefault();input.value=history[Math.max(0,--position)]||''}if(e.key==='ArrowDown'){e.preventDefault();input.value=history[Math.min(history.length,++position)]||''}});
  el.querySelector('.terminal-line span').textContent=prompt();setTimeout(()=>input.focus(),0);return el;
}
