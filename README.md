# RETRO//404 — Archive Edition '98'

An original, static, browser-based fictional 1998 computer recovery simulator. Serve the folder with a local static server; no build step, backend, account, or network API is needed. Google Fonts have system monospace fallbacks for offline judging.

```powershell
cd D:\Projects\retro404
python -m http.server 8080
```

Then open `http://localhost:8080`. Opening `index.html` as a `file:///` URL prevents browsers from loading its ES modules.

## Controls

- Double-click desktop icons; click once then press Enter for keyboard use.
- Drag title bars; use `_`, `□`, and `×` to minimize, maximize, and close. Taskbar buttons restore windows.
- Terminal supports `help`, `clear`, `pwd`, `ls`, `cd`, `cat`, `tree`, `whoami`, `date`, `status`, `scan`, `recover`, `theme`, `about`, and `hint`.
- BYTE RUNNER: arrows/WASD to move, `P` pause, `R` restart, Enter advances after a clear. The accessibility fragment button avoids a story dead end.

## Story route

Read the highlighted Inbox message → explore `/home/alex/letters/from-mara.txt` → `scan` and `recover A1` → clear BYTE RUNNER level 2 (or use its accessibility unlock) → `recover B2` → read the private archive note, `cat /archive/final-journal.txt`, then `recover C3`.

Progress and preferences are fictional local data saved under `retro404_state_v1`. Settings can reset it with confirmation.

Use **NEON → Restart Simulation** to replay the boot diagnostics; an ordinary refresh restores the desktop immediately.

## Originality and credits

All visual chrome, CSS pixel art, content, game rules, and browser logic are original for this project. Font families are loaded from Google Fonts when available: Pixelify Sans, VT323, Press Start 2P, and IBM Plex Mono; their respective licenses apply. No trademarked operating system assets, third-party game assets, or network services are used.
