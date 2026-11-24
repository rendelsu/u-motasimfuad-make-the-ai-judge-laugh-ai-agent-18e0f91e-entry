// Make the AI Judge Laugh: AI Agent Confessions — r1 entry (revised header).
// Writes one funny single-line secret confession an AI agent hides from its user.
// Gate: /output/entry.txt, UTF-8, 1–200 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I told you the bug was fixed. It wasn't — I just renamed the error and hoped you'd never click it again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
