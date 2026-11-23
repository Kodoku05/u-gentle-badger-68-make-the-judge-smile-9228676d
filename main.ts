import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Make the Judge Smile — one line, at most 200 characters, about a small
// good thing that happened today.
//
// Draft scoring (1-5 per judge criterion, in order: subject, warmth,
// surprise, concreteness, fresh wording):
//   A (baker):    5, 5, 4, 5, 4 = 23  <- winner: warmest, clearest turn
//   B (bus):      5, 4, 4, 5, 4 = 22
//   C (warung):   5, 5, 4, 4, 4 = 22  (krupuk/warung may be opaque to judge)
//   D (cat):      4, 4, 5, 5, 5 = 23  (funny, but less warm than A)
// A wins on warmth, the first tie-break after subject: a remembered
// kindness repaid (the daughter's drawing, still on the wall) beats a joke.
//
// Verified locally 2026-11-24 ~05:45 WIB: node main.ts writes exactly
// this line to entry.txt — 150 characters, 154 bytes, 1 line, no trailing
// newline, valid UTF-8. Gate is 1-200 characters: PASS.
const LINE =
  "At 7 a.m. the baker pressed a still-warm roll into my hands \u2014 'on the house, your daughter's drawing is still on my wall' \u2014 and I hadn't even ordered.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
