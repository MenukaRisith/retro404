export const mails=[
 {id:'m1',from:'Mara Chen',subject:'Archive index is slipping',date:'16 Oct 1998',body:'Alex,\n\nThe archive index is losing its references again. I copied the correspondence somewhere safe. Look under /home/alex/letters before you run another scan.\n\n— Mara'},
 {id:'m2',from:'NEON BYTE Service',subject:'Recovery session available',date:'17 Oct 1998',body:'Three archive sectors require recovery. Start with the lost correspondence. The terminal can inspect the current target with SCAN.'},
 {id:'m3',from:'Dad',subject:'Save a game for me',date:'14 Oct 1998',body:'Alex—your BYTE RUNNER score is getting serious. Keep the little data fragments; you never know what they unlock.'},
 {id:'m4',from:'Alex Morgan',subject:'Notebook reminder',date:'12 Oct 1998',body:'Do not erase readme.txt. It explains why the old machine matters.'},
 {id:'m5',from:'Mara Chen',subject:'A quiet backup',date:'10 Oct 1998',body:'The final journal was archived privately. Once the arcade fragment is restored, its envelope should appear.'},
 {id:'m6',from:'NEON BYTE Service',subject:'System check complete',date:'09 Oct 1998',body:'Disk surface acceptable. This notice is informational.'},
 {id:'m7',from:'Alex Morgan',subject:'Sunday project',date:'05 Oct 1998',body:'I made a tiny runner game for the family PC. Maybe it can hold a memory better than I can.'}
];
export const files={
 '/home':{type:'folder'},'/home/alex':{type:'folder'},'/home/alex/letters':{type:'folder'},'/games':{type:'folder'},'/system':{type:'folder'},'/archive':{type:'folder'},'/archive/fragments':{type:'folder'},'/trash':{type:'folder'},
 '/home/alex/readme.txt':{type:'text',content:'RETRO//404 ARCHIVE EDITION\n\nIf you found this, the machine still remembers. Start with the Inbox, then follow the correspondence.'},
 '/home/alex/system.log':{type:'system',content:'[WARN] Sector A1 missing index reference.\n[INFO] Recovery console ready.'},
 '/home/alex/letters/from-mara.txt':{type:'text',content:'Alex,\n\nThe correspondence index points to A1. I left its recovery marker in this letter. Open a terminal, use scan, then recover A1.\n\n— Mara'},
 '/games/byte-runner.txt':{type:'text',content:'BYTE RUNNER\nCollect cyan fragments. Level 2 yields the archive token.'},
 '/system/about.sys':{type:'system',content:'NEON BYTE SYSTEMS\nRETRO//404 0.9.8-RC'},
 '/archive/final-journal.txt':{type:'encrypted',content:'A family time capsule is waiting here.'}
};
