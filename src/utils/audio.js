import {state} from '../core/state.js';
let context;
function tone(frequency,duration=.07,type='square',delay=0,volume=.035){
  if(!state.sound)return;
  context??=new AudioContext();
  const oscillator=context.createOscillator(),gain=context.createGain(),at=context.currentTime+delay;
  oscillator.type=type;oscillator.frequency.setValueAtTime(frequency,at);
  gain.gain.setValueAtTime(volume,at);gain.gain.exponentialRampToValueAtTime(.001,at+duration);
  oscillator.connect(gain).connect(context.destination);oscillator.start(at);oscillator.stop(at+duration);
}
export const sound={click:()=>tone(540,.04),open:()=>{tone(440,.05);tone(660,.07,'square',.05)},collect:()=>tone(880,.05,'square'),danger:()=>{tone(160,.12,'sawtooth');tone(120,.16,'sawtooth',.1)},recover:()=>{tone(523,.08);tone(659,.08,'square',.09);tone(784,.16,'square',.18)},enabled:()=>{tone(392,.06);tone(523,.06,'square',.07);tone(784,.12,'square',.14)}};
