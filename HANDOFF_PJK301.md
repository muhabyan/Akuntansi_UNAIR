# HANDOFF: PJK301 (Perpajakan II) content rebuild

Written 2026-09-20 for a coding agent that has not seen the conversation behind this plan. It is self-contained. Where a statement comes from the handoff packages rather than from something I checked, it says so. Where a decision is not the user's yet, it is listed in section 4b as open. Do not treat open items as decided.

## 0. Read this first

- Repo: `C:\cek`, GitHub `muhabyan/Akuntansi_UNAIR`, default branch `main`. React + TypeScript + Vite, developed on Windows (Git Bash and PowerShell).
- The user is a student with an exam close. Correctness of the tax content matters more than polish. Readings TM05-TM07 come first because that is where the current content is actually wrong.
- **Never run `git add -A` or `git add .`.** This file is untracked in the repo root and the user said it must not be committed. Stage by explicit path. `.content-inbox/` is gitignored on purpose; do not force-add it.
- **Never merge a PR.** Never run `scripts/build-sem3-*.mjs` (section 10).
- Verify the snapshot below before acting: `git fetch && git log --oneline -3 origin/main && gh pr list`.

Snapshot on 2026-09-20 (re-check, it may be stale):

| Item | State |
|---|---|
| `origin/main` | `89db454`, merge of PR #10 (AKK202 UTS review) |
| PR1 = PR #11 | **Open, not merged.** Branch `chore/sem3-generators-canonical`, one commit `96c8127`. Vercel preview deployed. |
| PR2 to PR5 | Not started |
| Local checkout | `chore/sem3-generators-canonical` |
| Prior comparable work | AKS301 rebuild (PR #1), AKK202 rebuild (PRs #2, #3, #5 to #10). Use them as the style and test precedent. |

## 1. Goal

Perpajakan II is catalogued in the app as `PJK202`. The faculty handbook code is `PJK301` (`FEB25603015`). The existing pre-UTS content (TM1-TM7 readings, quiz items, flashcards, bank soal) is being replaced from verified handoff packages that were built from primary law and lecturer slides. The old content:

- cites regulations the packages show as revoked or changed: PMK 34/2017 jo. 41/2022 (PPh 22, TM5; revoked by PMK 81/2024), KEP-220/2002 (a TM4 flashcard; replaced by PMK 66/2023), and the PP 55/2022 UMKM time limits of 3, 4 and 7 years (TM5 flashcard; changed by PP 20/2026);
- cites instruments the packages could not confirm: PMK 141/2015 (PPh 23), PMK 192/PMK.03/2018 given as the PPh 24 rule and SE-02/PJ/2015 given as the Pasal 31E rule (TM7). The TM07 package records that the text of PMK 192/2018 is unavailable and derives PPh 24 from the law itself;
- has no regulation at all for PPh 25 (TM7);
- contradicts itself: TM6 cites construction under both PP 9/2021 and PP 9/2022; a TM7 quiz item has Singapore withholding 25% while the TM3 case says 17%;
- uses invented company names, some borrowed from real firms: a TM7 case is titled "PT Kalbe Farma" but its scenario says "PT Nusantara Farma"; also "PT Mayora Jaya", "PT Wika Adhi", "PT Surya Madistrindo" (TM11);
- has one bank soal case for the whole of TM1-TM7 (labelled "TM 4-6").

## 2. How the user wants each PR delivered

Observed on PR1. Assume the same for PR2 to PR5 unless the user says otherwise.

1. Branch from `origin/main`: `git switch -c <branch> origin/main`. That sets the upstream to `origin/main`, so **never use a bare `git push`**.
2. Implement, run the checks in section 10, then **stop and report before committing**. Wait for an explicit go-ahead.
3. On go-ahead: one commit, using the exact subject the user gives. Stage explicit paths.
4. Push with an explicit refspec: `git push -u origin <branch>:<branch>`.
5. `gh pr create --base main --head <branch>`. Then `gh pr checks <n> --watch`.
6. Give the user the Vercel preview URL. Find it in the `vercel` bot comment on the PR (`gh pr view <n> --json comments`) or in `gh api "repos/{owner}/{repo}/deployments?sha=<sha>"` then the deployment's statuses. Previews sit behind Vercel SSO: the URL redirects to `vercel.com/sso-api` for anyone not signed in, so you can report it but not load it.
7. Do not merge. The user merges.
8. Report faithfully: what passed, what failed, what was already failing on `main`. Say when a check was skipped.
9. Commit trailer and PR footer: use whatever attribution your own session's harness specifies. Do not copy the trailer from earlier commits.

## 3. The five-PR plan

Order was set by the user: readings TM05-TM07 before TM01-TM04, because the exam is close.

| PR | Suggested branch | Contents | Status |
|---|---|---|---|
| 1 | `chore/sem3-generators-canonical` | Remove hand-maintained courses from the `build-sem3-*` generators plus a guard test | **Done, open as PR #11** |
| 2 | `chore/rename-pjk202-to-pjk301` | Rename `PJK202` to `PJK301` everywhere, rename files and exports, legacy route alias, progress shim | Not started |
| 3 | `content/pjk301-tm05-tm07` | Readings TM05, TM06, TM07 plus `scripts/test-pjk301-canonical.mjs` | Not started |
| 4 | `content/pjk301-tm01-tm04` | Readings TM01, TM02, TM03, TM04, extending the canonical test | Not started |
| 5 | `content/pjk301-practice` | Quiz, flashcards and bank soal for TM1-TM7 plus `scripts/test-pjk301-alignment.mjs` | Not started |

Size estimates (rough, not measured; AKK202 reading modules ran 315 to 851 lines each): PR2 about +80/-30 lines before the server-side finding in PR2 below; PR3 about +1,800/-550; PR4 about +2,400/-700; PR5 about +1,100/-400.

### PR1 (done): generators

- Removed AKK202, AKS301, PJK202 from all three generator data maps. Removed AKS201 and MNK201 from the quiz and bank maps only, because their quiz and bank soal were expanded by hand in commit `eb2282c`. Their flashcards still reproduce and stay generated.
- `scripts/test-sem3-generators.mjs` holds one exact allowlist `GENERATED` per artefact and compares it with all five generator maps. It is registered in both task lists of `scripts/test-ci-bounded.mjs`.
- Verified: a full generator run changes no file under `src/`.
- Offer made to the user and **not yet answered**: a stronger guard that runs the generators into a scratch directory and requires their output to equal the committed files. It would catch hand-edits of any still-generated file without anyone maintaining a list. About 40 lines. Do not add it unless the user says yes.

### PR2: rename

Do this before the content PRs so the new tests and file names use the right code.

Files and exports to rename (use `git mv`):

- `src/data/quizzes/pjk202.ts`, `src/data/flashcards/pjk202.ts`, `src/data/banksoal/pjk202.ts` become `pjk301.ts`.
- Exports `PJK202_QUIZ`, `_QUIZ_UTS`, `_QUIZ_UAS`, `PJK202_FC`, `PJK202_BANK`, `_BANK_UTS`, `_BANK_UAS`, `PJK202_READINGS`, `PJK202_REVIEW_READINGS` become `PJK301_*`.
- `src/data/courseData.ts`: the catalog row (`code: 'PJK202'` becomes `'PJK301'`; keep `newCode: 'FEB25603015'`, `name: 'Perpajakan II'`, `prasyarat: 'PJK201 (L)'`, `flashcardCount: 84`), the constants `PJK202_TM1_7`, `PJK202_TM8_14`, `PJK202_REF`, and the comments.
- `src/data/courses/courseRegistry.ts`: `case 'PJK202': case 'PJK301':` keeps only `'PJK301'`, and the renamed imports.
- `src/data/quizzes/index.ts`, `src/data/flashcards/registry.ts`, `src/data/banksoal/nonPte.ts`: imports, map keys and the `if (courseCode === 'PJK202')` blocks.
- `src/App.tsx`: `UNIVERSAL_COURSES` lists both `'PJK202'` and `'PJK301'`; drop `'PJK202'`.
- `scripts/test-render-s1.mjs` lines around 148-149: known-issue entries `'PJK202 TM11...'` and `'PJK301 TM11...'` (the same reading loaded under two codes). Read how the test iterates codes before editing.
- Header comments in `src/data/pjk2/pjk2Data.ts` and `pjk2PracticeCases.ts`. `chatgpt_context.txt` at the repo root also mentions PJK202; it is a tracked text dump that no code imports. Leave it unless the user says otherwise.
- The generators no longer mention PJK202 after PR1, and the PR1 guard does not list it, so PR2 needs no guard change.

Route alias: `/course/PJK202` must keep working. `resolveCourseFromPath` in `src/App.tsx` (about line 47) matches only `code` and `newCode`; add a legacy-code map (`PJK202` to `PJK301`). Study-schedule notifications link to `/course/${schedule.course_code}` (`src/components/ScheduleNotifier.tsx`), so old schedule rows depend on this alias.

Progress shim, **client side** (verified in code):

- `akuntansi-feb-unair:study-progress` is a JSON `Record<string, boolean>` with keys `PJK202:tm{n}` (`materialKey` in `src/hooks/useStudyProgress.ts`).
- `flashcard-srs-PJK202` and `flashcard-stars-PJK202` (`src/components/FlashcardDeck.tsx`, `AdvancedFlashcardTab.tsx`). Read those files for the stored shape before writing the shim.
- Exam session keys `exam_session_PJK202_{setId}_{seconds}` (`src/data/quizSession.ts`). They are short-lived; migrating them is optional.
- The shim must be idempotent, must never overwrite existing `PJK301` data, and must tolerate `localStorage` throwing. Unit-test it with a fake storage and register the test in both lists of `scripts/test-ci-bounded.mjs`.

Progress shim, **server side. New finding, not covered by the user's approval; ask before coding.** Progress and schedules are also stored in Supabase, keyed by course code:

- `useStudyProgress.ts` reads and writes table `user_progress` (`user_id`, `course_code`, `chapter_id`). On login it unions the server rows into local state. `toggle()` deletes with `.match({ user_id, course_code, chapter_id })` built from the new code, so a legacy `PJK202` row would never be deleted and would reappear at the next sync. A client that only maps codes on read is therefore not enough.
- `src/hooks/useStudySchedule.ts` uses table `study_schedules` (`course_code`, `activity_id`, `date`, `time`). `ScheduleNotifier.tsx` looks the course up by `schedule.course_code`, so legacy rows lose the course name.
- There is no `supabase/` folder or SQL file in this repo, so you cannot run or review a migration from here.
- Options to put to the user: (A) a one-time SQL migration the user runs in Supabase (`update ... set course_code = 'PJK301' where course_code = 'PJK202'` on both tables) with the SQL in the PR description; (B) client-only: map legacy to new on read and issue deletes for both codes on toggle-off; (C) both. Note that the app is a PWA with a service worker, so old clients keep running the old code for a while after deploy; any SQL that runs first changes what they see. State this trade-off; do not choose for the user.

### PR3 and PR4: readings

- Rewrite `src/data/pjk2/modules/tm5.ts`, `tm6.ts`, `tm7.ts` (PR3) and `tm1.ts` to `tm4.ts` (PR4) from the packages (section 5).
- Delete the matching `CASE_*` exports from `src/data/pjk2/pjk2PracticeCases.ts` and their imports: TM1 `CASE_EXPENSE_DEDUCTIBILITY`, TM2 `CASE_INVENTORY_VALUATION_FISCAL`, TM3 `CASE_TRANSFER_PRICING_ALP`, TM4 `CASE_DEPRECIATION_REVALUATION`, TM5 `CASE_WITHHOLDING_PPH22_23_UMKM`, TM6 `CASE_FINAL_TAX_CONSTRUCTION_RENT`, TM7 `CASE_PPH24_ARTICLE_31E`. The new readings carry their own worked cases from the packages. Keep TM8-TM14 cases.
- Update `courseData.ts`: the TM titles and refs for the TMs you rewrite (`materi([...])` takes `[title, ref]` pairs), and `PJK301_REF` (add PMK 81/2024, PP 20/2026, PMK 66/2023, PMK 114/2025, PMK 172/2023, PMK 72/2023; keep the UU HPP, PP 55/2022 and textbook entries). Take each title from the package topic (section 5) rather than inventing one. Three titles change in substance: TM01 (now PPh general provisions plus individual taxpayers, natura, zakat, PTKP, Pasal 17 brackets), TM02 (acquisition of assets, inventory, NPPN) and TM07 (adds PPh 31A and WP OPPT).
- Create `scripts/test-pjk301-canonical.mjs` in PR3, modelled on `scripts/test-akk202-canonical.mjs`, extend it in PR4, and register it in **both** task lists in `scripts/test-ci-bounded.mjs` (`standardTasks` and `extendedTasks`; PR1 shows the anchor). It should check:
  - structure and render safety (section 8);
  - required citations per TM;
  - forbidden patterns: `PMK 34/2017`, `PMK 215/2018`, `PMK 261/2016`, `KEP-220` or `Kep-220` used as current law (naming it as the replaced rule is fine), `PP 9/2021` for construction, a 7-year limit for individual UMKM taxpayers, the letter "M" as a currency abbreviation, and the invented names above;
  - the key number of every verified example, taken from each package's acceptance tests. Example, TM07: Pasal 31E proportional case with turnover Rp30 Miliar and PKP Rp3 Miliar gives PPh Rp607.200.000; PPh 24 case with foreign income Rp1 Miliar and PKP Rp6 Miliar gives a limit of Rp220.000.000.
- TM8 (the UTS review) will contradict the new TM1-TM7. That is out of scope (section 11).

### PR5: practice items

Counts approved by the user:

- **Quiz:** 5 items per TM for TM1-TM7, so 35 in `PJK301_QUIZ_UTS`. TM8-TM14 keep their current 7 in `PJK301_QUIZ_UAS`.
- **Flashcards:** 6 per TM for TM1-TM7, so 42, keeping the total at 84 and `flashcardCount: 84`. TM8-TM14 unchanged.
- **Bank soal:** 1 case per TM for TM1-TM7, so 7 in `PJK301_BANK_UTS`. `_UAS` unchanged.
- Build them from each brief's verified examples and Exam Traps. Model `scripts/test-pjk301-alignment.mjs` on `scripts/test-akk202-alignment.mjs`, which already has `assertNoOldTopics`, `assertNumbersFromReading` (every number in an item must appear in the reading of its TM), render-path checks and the 281-character cap on flashcard backs.
- Rules that carry over from the AKK202 work: the readings are the only content authority; a practice item must not hand the student figures they are meant to derive; flashcard backs stay at or under 281 characters because `FlashcardDeck` clips overflow on a fixed-height face.
- The slide-only rule from section 6 applies to every item.
- Types: `QuizQuestion`, `BankSoal`, `AdvancedStudyCard` and the allowed `FlashcardCategory` values are in `src/types.ts` (about lines 274, 376, 367).

## 4. Decisions

### 4a. Approved by the user

1. Five-PR order as in section 3, with readings TM05-TM07 before TM01-TM04.
2. Generators: remove PJK202, AKK202 and AKS301 entirely; remove AKS201 and MNK201 per artefact (quiz and bank only). Guard as an exact per-artefact allowlist. The reason given: one accidental generator run would undo the work in PRs #1 to #9, and a guard that protects only some courses is not a guard.
3. Rename PJK202 to PJK301 now, as its own PR before the content, with a progress shim. Rename the files and exports too, so the new tests start with the right code.
4. Quiz 5 per TM, flashcards 6 per TM, bank soal 1 case per TM.
5. The scope-limitation pattern in section 6.
6. Stop before committing; one commit per PR; the user reviews the preview; the user merges.
7. Do not commit this handoff file.

### 4b. Open, not decided. Ask or flag; do not guess.

1. **Server-side progress** (PR2, above). The approved "progress shim" was scoped from a localStorage-only cost estimate. The Supabase tables were missed. The user needs to choose A, B or C.
2. **Flashcard IDs.** The saved review state is keyed by card ID (`pjk202-tm08-01` and so on). Keeping the TM8-TM14 IDs unchanged preserves that history; the TM1-TM7 cards get new IDs anyway. Planned: new TM1-TM7 IDs use the `pjk301-tmNN-NN` prefix, TM8-TM14 IDs unchanged, which leaves a mixed prefix. Confirm with the user.
3. **The `src/data/pjk2/` directory.** It is named after the topic (Perpajakan II), like `src/data/akm2/` for AKK202, whose exports and quiz files use the course code. Recommended: keep the directory and `pjk2Data.ts`, rename only exports and the quiz, flashcard and bank files. The user said "rename the files and exports"; confirm whether the directory was meant.
4. **Basing PR2 on an unmerged PR #11.** Ask whether PR #11 is merged. Base each PR on current `main`; stack only if the user asks, and say so in the PR body.
5. **PP 20/2026 versus the lecturer slides.** The TM01 package states the slides predate PP 20/2026 and still teach the 7-year rule. Recommended: show the law's position plus a `Dua Posisi` callout so students are not surprised by the slide. Not confirmed.
6. The drift-check guard offered in PR1.

## 5. The verified handoff packages

Location: `C:\cek\.content-inbox\PJK301\TM01` to `TM07`. Gitignored, so they exist only in this checkout. Earlier packages sit beside them (`.content-inbox\AKK202`, `.content-inbox\AKS301`) and show how those were converted.

Each TM folder has five files:

| File | Authority for |
|---|---|
| `00_status.md` | Final status, pipeline gates, **scope limitations**, review items and conflicts, what was corrected. Read first. |
| `04_canonical_spec.md` | **What is true**: rules, article and paragraph citations, rates, thresholds, verified numeric examples, dual positions. Highest authority among the package files. |
| `05_student_learning_version.md` | **How it is taught**: the student-facing wording, order, worked cases and exam toolkit. The text you convert into reading blocks. |
| `06_implementation_brief.md` | **Structure and acceptance**: canonical section order, learning flow, verified formulas, `EX-xxx` examples, exam traps, DO NOT INCLUDE, acceptance tests `AT-xxx`. |
| `07_qa_manifest.md` | QA checklists (84, 88, 80, 85 checks and so on, all PASS per the status files). I did not read these in full; use them as checklists. |

Working rule: if `05` and `04` disagree, `04` wins unless `00_status.md` says otherwise, and report the discrepancy to the user. Precedence stated in the TM01 brief: primary law, then lecturer main material, then lecturer supporting slides, then the RPS (course plan), then the peraturan-status note.

Limits of what is available:

- `01_source_inventory.md`, `02_coverage_inventory.md` and `03_conflict_and_gap_audit.md` are referenced by the status files but were **not delivered**.
- The primary law PDFs, the lecturer slide PDFs and the RPS (the packages call the folder `course-sources/PJK301/shared/regulation/`) are **not in this repo or in the inbox**. Every regulatory fact in this handoff is what the packages state; I could not check any of it against the law. **Never add a regulatory fact from memory.** If something is missing, report it as a scope limitation.
- The TM05, TM06 and TM07 briefs describe a calculation engine (a JSON data model, `AT-xxx` tables, edge cases). That is not reading structure. Take the reading structure from `05` and the section order from `06` where it has a "CANONICAL SECTION ORDER" (TM01, TM04).
- Do not use the old PJK202 module skeleton. Follow the package structure.

Per-TM summary (from `00_status.md`; topics are the package's own):

| TM | Package topic | Status | Slide source | Main regulations named |
|---|---|---|---|---|
| 01 | Ketentuan umum PPh dan PPh WP orang pribadi | READY_WITH_SCOPE_LIMITATION | main slides plus 4 supporting decks | UU HPP, PP 55/2022, PP 20/2026, PMK 66/2023, PMK 114/2025, PMK 168/2023 |
| 02 | Perolehan harta, penilaian persediaan, NPPN | READY_WITH_SCOPE_LIMITATION | 34 slides | UU HPP, PP 55/2022, PMK 81/2024, PMK 101/2016 |
| 03 | Hubungan istimewa, pencegahan penghindaran pajak, APA | READY_FOR_IMPLEMENTATION (no scope limitation) | 19 slides | UU PPh Pasal 18 and 32A, PP 55/2022 Bab VI (Pasal 32-47), PMK 172/2023, PMK 169/PMK.010/2015 |
| 04 | Penyusutan, amortisasi, penarikan aset, revaluasi | READY_WITH_SCOPE_LIMITATION | 35 slides | UU PPh Pasal 11 and 11A, PP 55/2022 Pasal 21-22, PMK 72/2023, PMK 66/2023 |
| 05 | PPh 22, 23/26, pemungut marketplace, UMKM | READY_WITH_SCOPE_LIMITATION | 51 slides plus RPS | PMK 81/2024, PMK 51/2025, PMK 37/2025, PP 20/2026 |
| 06 | PPh final (Pasal 4(2), Pasal 15, dividen OP, UMKM) | READY_WITH_SCOPE_LIMITATION | 62 slides | PMK 81/2024, UU HPP, PP 55/2022, PP 20/2026 |
| 07 | PPh 24, PPh 25 dan WP OPPT, PPh 31A, PPh 31E | READY_WITH_SCOPE_LIMITATION | **none**; RPS Pertemuan 7 only | UU PPh Pasal 24 and 31E jo. UU HPP, PMK 81/2024, PP 78/2019 |

Worked examples in the packages: TM01 six (`EX-001` to `EX-006`, plus a "Nona E" PP 20/2026 case in the student version), TM02 seven, TM03 three, TM04 four (`EX-01` to `EX-04`; the status file says three), TM05 ten, TM06 fifteen, TM07 eight.

Things I noticed inside the packages and did not resolve. Check each against `04` before using it:

- TM05's status gives PPh 22 as PMK 81/2024 **Pasal 217-227** and TM07's gives PPh 25 and OPPT as **Pasal 227-237**. Pasal 227 sits in both ranges, so one is probably off by one. Cite the specific article `04` gives for each rule, not a range boundary.
- TM07 `AT-006` is titled "Masa Jan-Feb" but its expected output says "Jan-Maret 2026".
- TM04's status says three verified cases while the brief lists four.
- TM05's marketplace collection date (deferred until 31 October 2026, effective 1 November 2026) rests on a DJP announcement that is not a primary source (TM05 scope limitation 03). It is six weeks away; flag it as time-sensitive.

## 6. Scope-limitation pattern (agreed)

Some figures come only from lecturer slides, with no primary law in the package. The app must say so instead of presenting them as law. Precedent: the `Interpretasi` callouts in AKK202 (`kind: 'callout'`, `variant: 'warning'`, title `Interpretasi - <topik>`; see `src/data/akm2/modules/tm2.ts`). `CalloutVariant` is `'info' | 'tip' | 'warning' | 'key'` (`src/types.ts`).

1. **`Batasan Sumber - <topik>`** (`variant: 'warning'`). Place it once at the top of any section whose figures come only from slides. It states which slide page each figure comes from, which regulation governs it (for example PP 34/2017), and that this regulation's text is not among the verified sources.
2. **A "Sumber" column in rate tables**, instead of one callout per row. Cells look like `Slide dosen hlm. 31` versus `PMK 81/2024 Ps. 191`. TM06 needs this: eleven separate callouts would be noise.
3. **`Dua Posisi - <topik>`** (`variant: 'info'`) wherever a slide conflicts with the law: TM01 document retention 5 years (UU KUP Pasal 28 ayat 11) versus 10 years (slides), holiday gift packages, sports facilities, the director's personal costs (home electricity and domestic help) and zakat; TM02 reorganisation values; TM03 the older TP references in the slides; TM04 KEP-220 versus PMK 66/2023.
4. **TM07 banner** at the top: this meeting has no lecturer slides or exercises; its scope is the eight sub-topics of RPS Pertemuan 7. Also keep the package's per-item origin marking as the "Sumber" column: `Teks peraturan` versus `Subbahasan RPS` (the package writes `[TEKS PERATURAN]` and `[SUBBAHASAN RPS]`).
5. **Never show the raw `SL-PJK-xx` IDs to students.** They collide across TMs (below). Tests may key on `TM04/SL-PJK-02` style pairs.
6. **Practice rule.** A quiz item, flashcard or bank soal that uses a slide-only rate must say so in its explanation, for example "tarif menurut slide dosen". The alignment test enforces it with a per-TM list of slide-only values, built from the scope-limitation tables in `00_status.md` and `04`.

Where the scope limitations are. IDs restart per package; always quote them with the TM:

| TM | What is slide-only or missing |
|---|---|
| 01 | `SL-PJK-01` NPPN percentage table (PER-17/PJ/2015); `-02` BAZ/LAZ list and zakat receipt form (PER-15/PJ/2020, PER-6/PJ/2011); `-03` the 12 investment instruments for exempt dividends (PMK 18/PMK.03/2021); `-04` scholarships (PMK 68/PMK.03/2020); `-05` TER monthly tables (belong to a PPh 21 TM) |
| 02 | `SL-PJK-01` NPPN percentage table by KBLI (PER-17/PJ/2015) |
| 03 | none |
| 04 | `SL-PJK-02` PMK 79/PMK.03/2008 text absent, so the whole revaluation section and the Dynaplast case (slides 22-35) are slide-only |
| 05 | `SL-PJK-03` marketplace collection deferral (DJP announcement) |
| 06 | `SL-PJK-04` to `-14`, listed next |
| 07 | `SL-PJK-15` PMK 192/PMK.03/2018 absent, so PPh 24 is derived from Pasal 24 UU PPh jo. UU HPP; plus the no-slides banner |

TM06 slide-only clusters (slide pages are in `04`): 04 deposit and savings interest (PP 131/2000 jo. 123/2015 jo. 22/2024), 05 bond and SUN interest (PP 91/2021, PMK 63/2008), 06 cooperative savings interest (PP 15/2009, PMK 112/2010), 07 prize draws (PP 132/2000), 08 exchange derivatives (PP 17/2009 jo. 31/2011), 09 share sales on the exchange (PP 41/1994 jo. 14/1997), 10 venture-capital shares (PP 4/1995, PMK 48/2018), 11 construction services (PP 51/2008 jo. PP 9/2022), 12 land and building rent (PP 34/2017), 13 oil and gas participating interest (PP 93/2021), 14 PPh Pasal 15 shipping and aviation (KMK 416, 417 and 475/1996). Per the TM06 package, only land and building transfer (PHTB), individual dividends and UMKM rest on primary law. Confirm each rate's provenance in `04` before labelling it.

## 7. Regulations that replaced revoked ones (as the packages state them)

| Revoked or superseded | Replaced by | TM |
|---|---|---|
| PMK 34/2017 jo. PMK 41/2022 (PPh 22 collection) | revoked by PMK 81/2024 Pasal 483 angka 22; replaced by PMK 81/2024 Bab VI Bagian Kelima, **Pasal 217-227**, jo. PMK 51/2025 | 05 |
| PMK 261/PMK.03/2016 (PPh final, PHTB) | revoked by Pasal 483 angka 21; replaced by Bab VI Bagian Kedua, **Pasal 191-203** (payment, collection, SPT Unifikasi, PHTB exceptions) | 06 |
| PMK 215/PMK.03/2018 (WP OPPT) | revoked by Pasal 483 angka 27; replaced by Bab VI Bagian Keenam, **Pasal 227-237**; WP OPPT in Pasal 235 and 236 at 0,75% per month of gross turnover per place of business, "tidak final/kredit pajak" (package wording) | 07 |
| PMK 52/PMK.010/2017 jo. PMK 56/PMK.010/2021 (book value in reorganisation) | revoked by Pasal 483 angka 24, as of 1 January 2025; replaced by Bab VII Bagian Kesatu, **Pasal 392-406** | 02 |
| PMK 11/PMK.010/2020 (tax allowance implementation) | revoked by Pasal 483 angka 31; replaced by Bab XI Bagian Kedua, **Pasal 407-424**. **PP 78/2019 remains in force.** | 07 |
| KEP-220/PJ/2002 (natura: mobile phones and sedans) | PMK 66/2023 | 04, 01 |
| PP 55/2022 **Pasal 59** (7-year limit for individual UMKM taxpayers and single-person companies) | **deleted** by PP 20/2026 Pasal I angka 6 | 01, 05, 06 |
| PER-43/PJ/2010 jo. PER-32/PJ/2011, PMK 213/2016, PMK 22/2020 (TP references in the slides) | superseded by PP 55/2022 and PMK 172/2023, which the TM03 package says expressly revoke the earlier regulations | 03 |

Also from the packages:

- NPPN rules (subject, turnover below Rp4,8 Miliar, notify within the first 3 months, bookkeeping duty) are in PMK 81/2024 **Pasal 448-453**. In TM02, reorganisation values are a dual-position item and the NPPN percentage table is a scope limitation (`TM02/SL-PJK-01`).
- PMK 114/2025 governs zakat deduction: Pasal 8-11; Pasal 9(1)a and (3) forbid zakat from causing or enlarging a fiscal loss. PMK 168/2023 (TER) still governs PPh 21; its monthly and daily tables belong to a PPh 21 TM, not TM01.
- PP 20/2026 (LN 2026 No. 43, TLN No. 7173), as the TM01 package records it: Pasal 59 PP 55/2022 deleted, so no 7-year limit for WP OP or single-person PT; eligible subjects narrowed to WP OP, single-person PT and koperasi (Pasal 57 ayat 1); koperasi at most 4 tax years (Pasal 57 ayat 2 huruf f); anti-avoidance for free-profession income (Pasal 57 ayat 2b); turnover-splitting aggregation (Pasal 57 ayat 2e jo. Pasal 58); transitional Pasal II (CV, firma, conventional PT and BUMDes registered before PP 20/2026 keep the remainder of their PP 55/2022 period, for example PT 3 years and CV/firma 4 years). The TM01 UMKM OP turnover exemption is Rp500 juta a year.
- The lecturer slides do not yet reflect PP 20/2026 (per the TM01 package).

## 8. Writing the readings and the tests

Types: `Reading` is `{ tm, title, ref?, intro, objectives[], blocks[] }` (`src/types.ts`, about line 262). Block kinds include `h2`, `h3`, `p` (supports `**bold**`), `ul`, `ol`, `callout`, `table`, `formula`, `code`, `figure`, `example`, `solution-reveal`. Read the union in `src/types.ts`.

Precedent: `src/data/akm2/modules/tm2.ts` to `tm7.ts` for shape and tone; `scripts/test-akk202-canonical.mjs` (functions `checkReading`, `markdownStrings`, `plainStrings`) for the render-path rules. Copy the checks, not AKK202's heading names (`1. Orientation / Quick Map`, `N. Exam Toolkit`); PJK301 headings come from the packages.

Render-path rules enforced for AKK202 (reuse them):

- No unescaped `$` and no lone `*` in markdown fields: `intro`, `p` and `callout` text, list items, table cells and captions, journal captions, `formula` notes, and `solution-reveal` prompts.
- A markdown field must not start with a block marker (`>`, `#`, `1.`, `-`, `+`).
- No backslashes in plain-text fields, where an escape would show literally: the reading `title`, `ref` and `objectives`, the titles of `example`, `solution-reveal` and `callout` blocks, `h2` and `h3` text, and table headers.
- Every table row has as many cells as its header.
- A `formula` block must contain `\` (LaTeX, math path) and must not contain `$`.

The package markdown uses `$$...$$` and `$...$` LaTeX, GitHub alerts (`> [!NOTE]`) and ASCII trees. The reading renderer has none of these: turn math into `formula` blocks, alerts into `callout` blocks, and ASCII diagrams into a `code`, `table` or `figure` block.

Style rules from the packages and earlier sessions:

- Currency: write the full number (`Rp4.800.000.000`) or spell out `Juta` and `Miliar`. Never the letter "M" for miliar.
- Use the package's worked cases as written. Do not invent company names or figures.
- Avoid the literal text `(c)`; the shared Manrope font renders it as a copyright sign (noted in an earlier session, not re-verified).
- `scripts/test-render-s1.mjs` renders every reading string of every course through KaTeX and is part of the standard tasks. It must keep passing.

## 9. Rename PR: what to check afterwards

After PR2, `grep -rn "PJK202\|pjk202" src scripts` should leave only the deliberate legacy-code map, the migration code and, if the user decides so, the TM8-TM14 flashcard IDs. Run the route smoke by hand: `/course/PJK301`, `/course/FEB25603015` and `/course/PJK202` (alias) must all open the course.

## 10. Known repo state

Test baseline, measured on the PR #11 branch on 2026-09-20 (its `src/` equals `main`; the 15 failures were also confirmed identical on a clean `main`): **12 pass, 15 fail, 27 tasks.**

- Pass: `data_validation`, `sia_canonical_readings`, `aks301_alignment`, `akk202_canonical_readings`, `akk202_alignment`, `sem3_generator_guard` (PR #11 only), `render_s1_guard`, `pte_bank_validation`, `pte_bank_alignment`, `pte_bank_registry`, `pte_bank_behavior`, `pte_simulator_integrity`.
- Already failing on `main`: `uiux_course_consistency`, `flashcard_behavior`, `pte_simulator_validation`, `ux10a_foundation`, `ux10a_cascade`, `ux10b_catalog_source`, and all nine `stage1_home_experience` to `stage9_navbar_scroll_reveal`. Causes not investigated. The two I saw messages for: `flashcard_behavior` reports that `FlashcardDeck` lacks `isFlashcardInteractiveTarget(event.target)`; `pte_simulator_validation` reports that the EKT109 session version was not bumped to v2. None involve PJK content.

**`npm test` stops at the first failure**, so it hides the rest. It runs `scripts/test-ci-bounded.mjs`, which breaks out of the loop on the first failing task. It prints the passing tasks up to `uiux_course_consistency`, fails there and stops: 8 of the 27 tasks on the PR #11 branch (7 of 26 on `main`, which lacks the new guard). Run every task independently instead. Save this as a scratch file and run it from the repo root:

```js
// run-all-ci-tasks.cjs
const { readFileSync } = require('node:fs');
const { spawnSync } = require('node:child_process');
const standard = readFileSync('scripts/test-ci-bounded.mjs', 'utf8').split('const extendedTasks')[0];
for (const [, id, script] of standard.matchAll(/\['([a-z0-9_]+)', '([^']+)'\]/g)) {
  const r = spawnSync(process.execPath, [script], { encoding: 'utf8', timeout: 180000 });
  console.log(`${r.status === 0 ? 'PASS' : 'FAIL'} ${id}`);
}
```

A change is clean when the PASS set does not shrink and the FAIL set does not grow, plus your new tests pass. To compare with clean `main`: commit your work, `git switch --detach origin/main`, run the script, then `git switch -`. The runner also has `CI_TEST_MODE` values `extended`, `mutations` and `full`.

Other checks per PR that touches `src/`: `npx tsc --noEmit -p .`, `npm run build`, `npx eslint <changed scripts> --max-warnings=0`, `node scripts/lint-source.mjs`.

**Generator risk.** `scripts/build-sem3-flashcards.mjs` and `scripts/build-sem3-quizzes-and-banksoal.mjs` (with `build-sem3-quiz-data.mjs` and `build-sem3-bank-data.mjs`) overwrite `src/data/{flashcards,quizzes,banksoal}/<code>.ts`. Until PR #11 merges, `main` still has all seven Semester 3 courses in those maps, so **one run on `main` reverts the hand-built AKK202, AKS301, PJK202, AKS201 and MNK201 files** (a run cuts about 2,600 lines from the AKS201 and MNK201 quiz and bank files alone). After PR #11, only flashcards for AKM202, AKS201, MNK201, AKA201 and quizzes and bank soal for AKM202, AKA201 are generated. Never run the generators as part of this work. If a course becomes hand-maintained later, remove it from the generator map and from `GENERATED` in `scripts/test-sem3-generators.mjs`.

Repo mechanics:

- `core.autocrlf=true`, so `LF will be replaced by CRLF` warnings are harmless. When you edit files by script, detect and preserve each file's line endings.
- `git diff` can report phantom insertions when whole blocks are deleted; `git diff --minimal` is the honest view.
- The two task lists in `scripts/test-ci-bounded.mjs` need identical additions.
- Vercel previews come from the GitHub integration (there is a `vercel.json` and no workflow).
- The user's Claude memory notes for this project are in `C:\Users\Lenovo\.claude\projects\C--cek\memory\` (`pjk301-rebuild.md`, `akk202-canonical-alignment.md`). If they conflict with this file, this file is newer.

## 11. Deliberately out of scope

Do not do these, and do not fix them opportunistically:

- **TM08 to TM14 content.** Only the PR2 rename touches them. Their quiz, flashcard, bank soal, cases and readings stay as they are.
- **The TM8 UTS review.** `PJK301_REVIEW_READINGS.uts` is the TM8 reading, which summarises the old TM1-TM7 and will contradict the new ones (it cites PMK 02/2010, omits individual income tax, NPPN, zakat, PP 20/2026, PPh 26, marketplace, PPh 31A and WP OPPT). A dedicated review reading, like AKK202's PR #6, is a follow-up the user has not requested yet. Other soft overlaps to leave alone: TM9 repeats the natura rules (consistent with the new TM01), TM11 repeats Pasal 31E and PPh 25 without citing PMK 81/2024, and TM8 flashcards use "4.8M"-style amounts. The stale TM8 metadata row in `courseData.ts` also stays.
- **Course-code mismatches in AKM II, SIA and Pengantar Manajemen.** The user says the same kind of catalog-versus-handbook mismatch exists for them. I have not investigated it and do not know the details. Their catalog rows are `AKK202` (AKM II), `AKS301` (SIA) and `MNM101` (newCode `MNM201`, Pengantar Manajemen). Do not rename or "fix" any of them.
- Repairing the 15 tests already failing on `main`.
- Removing AKK202 or other hand-built courses from anything beyond the generators.
- Adding the drift-check guard without the user asking.

## 12. When to stop and ask

Ask the user before proceeding if: you need to choose between the server-side migration options; a package file contradicts another and `00_status.md` does not settle it; a rate or article is missing from the packages and would have to come from memory; you find a second place where progress or routing is keyed by course code; or a check that passed on `main` starts failing on your branch.
