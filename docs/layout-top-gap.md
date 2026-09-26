# Top gap below the site header — findings (step 1)

Measured on a production build of `origin/main` 0b2aa17 (`assets/index-cBFmAcCU.js`), light mode, scroll 0, and on
https://akuntansi-unair.vercel.app (same numbers). "Gap" = header bottom → top of the first visible content (the text line
of a plain link, or the top edge of a box with a border/background). Header = fixed `<nav>` in `Navbar.tsx`.

## Header height (the thing every offset should follow)

| Width | Header at rest | Header after scrolling |
| --- | --- | --- |
| < 768 | 53 px | 53 px |
| 768–1023 | 70 px | 54 px |
| 1024–1279 | **120 px** (search wraps to a 2nd row, `mt-2 hidden lg:block xl:hidden`, 7f42c3b 2026-09-16) | 104 px |
| ≥ 1280 | 70 px | 54 px |

No offset in the app follows this height; all are fixed numbers.

## Gap per page type, desktop 1280 / 1918

| Page | Gap | Layers (top → down) |
| --- | --- | --- |
| Home `/` | 54 / 136 px | `<main>` has no offset; the hero `<section>` is `min-h-[82svh] justify-center md:pt-0` and its content `md:py-20`, so the text is **vertically centred** in 82 % of the window and the gap grows with window height (bbea725, 2026-09-15). |
| Semester `/semester/sem3` | 74 px | `<main>` `md:pt-28` = 112 px fixed-header offset, 42 px more than the 70 px header (13ed1e2, 2026-06-25) + `SemesterView` wrapper `pt-8` = 32 px (13ed1e2, 2026-06-25). |
| Course `/course/PJK301`, practice tabs (Kuis, Bank Soal, Flashcard), legacy `CourseDetailView` courses | 70 px to "Kembali"; 118 px to the course card | `<main>` `lg:pt-32` = 128 px (58 px more than the header; `md:pt-[10.75rem]` = 172 px at 768–1023) — in the initial commit 43828f5 (2026-06-23) + the "Kembali" link is a 44 px tap target (`min-h-11`) with its label centred = 12 px (bbea725, 2026-09-15) + that link's height and `mb-4` before the card. |
| Laporan (both report views) | 58 px to the "Kembali" box | same `<main>` `lg:pt-32` (43828f5). |
| Panduan `/guide` | 74 px | `<main>` has no offset; `GuideView` root `pt-16` = 64 px header compensation (eeff2cb, 2026-06-25) + hero `<section>` `pt-20` = 80 px (bbea725, 2026-09-15). |
| Reading, layered (AKA201) and PJK301 | 6 px to the Daftar Isi bar | `<main>` `lg:pt-32` 128 px, cancelled by the reading wrapper `-mt-16` (−64 px; bbea725 / 7f42c3b), so the bar's natural top is 64 px — *under* the 70 px header — and `sticky md:top-[4.75rem]` (7f42c3b, 2026-09-16) holds it at 76 px. |

Phones (390): semester 75, course/practice 75, reading 47 to the bar, Laporan 111, Panduan 91, home 66 px — left as they are.

### Not reproduced: ~210 px above the Daftar Isi bar

At 1280, 1440 and 1918 (local build and production), opening TM01 via "Lanjut TM 1", via the TM row and after a reload, the
bar is 6 px below the header at scroll 0. Nothing in the reading path reserves space for a banner, notice or toolbar:
`UpdateNotifier`, `PWAPrompt`, `IntroSplash` and the utility launchers are all `position: fixed`. The `!important` top
paddings in `src/styles/*.css` (`ux-v2-catalog`, `landing-semester-experience`) are in files that are never imported.

## Other problems found while measuring (same cause: hard-coded offsets)

1. **Clicking a Daftar Isi entry closes the reading** (all widths, desktop column and phone sheet). The links are plain
   `<a href="#…">`; a fragment navigation fires `popstate`, and both `App.tsx` and `CourseLayout.tsx` treat any
   `popstate` without their state as Back (`App.tsx` handler since 43828f5, `CourseLayout.tsx` handler 4e26ba8
   2026-09-24; the `#` outline links came with bbea725, 2026-09-15).
2. **1024–1279 px:** the reading bar sticks at 76 px under a 120 px header (44 px hidden); the desktop Daftar Isi column
   (`top-24` = 96 px) and the Laporan side panel (`lg:top-24`) have 24 px under the header; Daftar Isi targets
   (`scroll-mt-40` = 160 px) would land behind the bar (header 120 + bar ≈ 64 px = 184 px; computed, since the jump
   closes the page first); quiz-question jumps (`scroll-mt-24` = 96 px) would land 24 px under the header.
3. **Zen mode** (header and reading bar hidden): `<main>` 24 px + inner `<main>` 24 px (the zen rule matches both)
   − 64 px wrapper = content starts at −16 px, so the breadcrumb row is cut off at the top at every width, and the fixed
   "Keluar Zen" button sits over the TM badge.

## Result (steps 2–3)

From 768 px every page starts at `--page-top` = resting header height (`--site-header-rest-h`, 70 px, or 120 px at
1024–1279) + 34 px. Measured on `claude-top-gap` d57c17c (`assets/index-BPVdGGUQ.js`), light mode, scroll 0:

| Page | 390 | 1280 | 1918 |
| --- | --- | --- | --- |
| Home | 72 → 72 | 63 → 32 | 145 → 32 |
| Semester | 80 → 80 | 79 → 39 | 79 → 39 |
| Course, Kuis, Bank Soal, Flashcard, legacy course | 80 → 80 | 75 → 39 | 75 → 39 |
| Reading, layered and PJK301 (to the Daftar Isi bar) | 54 → 54 | 6 → 34 | 6 → 34 |
| Laporan | 111 → 111 | 58 → 34 | 58 → 34 |
| Panduan | 91 → 91 | 74 → 34 | 74 → 34 |

Numbers are to the letters of a text link (39 = 34 px line top + the font's own space above the letters) or to the top
edge of a box. Sticky bars and `#` jumps now use the live header height (`--site-header-h`, published by `Navbar.tsx`);
no Daftar Isi jump lands under the header or the bar at 390–1918 px, and Zen mode starts below "Keluar Zen".
Screenshots: https://claude.ai/artifact/CzTHK8uXf8HrQi4E8aTKnF (private to the owner until shared).
