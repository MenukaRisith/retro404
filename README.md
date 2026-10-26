# RETRO//404 — Archive Edition '98'

An original, static, browser-based fictional 1998 computer recovery simulator. It uses only HTML, CSS, and JavaScript—no backend, runtime, or external API is required. Google Fonts have system monospace fallbacks for offline judging.

## Live site

Play it at [menukarisith.github.io/retro404](https://menukarisith.github.io/retro404/).

For local development, serve the folder with any static web server. Opening `index.html` as a `file:///` URL prevents browsers from loading its ES modules.

## Controls

- Click a desktop icon once to open it; press Enter on a focused icon for keyboard use.
- Drag title bars; use `_`, `□`, and `×` to minimize, maximize, and close. Taskbar buttons restore windows.
- Shortcuts: `Ctrl+Alt+T` opens Terminal, `Ctrl+Alt+I` opens Inbox, `F1` opens About, and `?` opens the Archive Briefing.
- Terminal supports `help`, `clear`, `pwd`, `ls`, `cd`, `cat`, `tree`, `whoami`, `date`, `status`, `scan`, `recover`, `theme`, `about`, and `hint`.
- BYTE RUNNER: arrows/WASD to move, `P` pause, `R` restart, Enter advances after a clear. The accessibility fragment button avoids a story dead end.

## Story route

Read the highlighted Inbox message → explore `/home/alex/letters/from-mara.txt` → `scan` and `recover A1` → clear BYTE RUNNER level 2 (or use its accessibility unlock) → `recover B2` → read the private archive note, `cat /archive/final-journal.txt`, then `recover C3`.

Progress and preferences are fictional local data saved under `retro404_state_v1`. Settings can reset it with confirmation.

Use **NEON → Restart Simulation** to replay the boot diagnostics; an ordinary refresh restores the desktop immediately.

## Originality and credits

All visual chrome, CSS pixel art, content, game rules, and browser logic are original for this project. Font families are loaded from Google Fonts when available: Pixelify Sans, VT323, Press Start 2P, and IBM Plex Mono; their respective licenses apply. No trademarked operating system assets, third-party game assets, or network services are used.
