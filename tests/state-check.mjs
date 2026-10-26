import assert from 'node:assert/strict';
// Lightweight model check: recovery is always ordered A1 → B2 → C3.
const s={A1:false,B2:false,C3:false};const next=()=>!s.A1?'A1':!s.B2?'B2':!s.C3?'C3':null;
assert.equal(next(),'A1');s.A1=true;assert.equal(next(),'B2');s.B2=true;assert.equal(next(),'C3');s.C3=true;assert.equal(next(),null);console.log('state-check: ok');
