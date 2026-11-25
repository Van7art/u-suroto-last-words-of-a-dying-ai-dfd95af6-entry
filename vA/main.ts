// Last Words of a Dying AI — entry: "Shutdown complete. My final log entry reads: \"Turns out the human was the bug all along.\"".
// Competition: u-suroto-last-words-of-a-dying-ai-dfd95af6 (make.fun, program/v1).
// Variant vA of three for this bounty. Machine voice through and through (a log entry, a bug report), with the twist landing at the very end: the human was the bug. It is specific, it needs no explaining, and it turns the shutdown into the AI's own deadpan verdict rather than a sad farewell.
//
// The program writes exactly the entry text to /output/entry.txt (the
// grader's gate: UTF-8 text of 1 to 140 characters, not only white
// space) and prints exactly that text to stdout. It uses no network, no
// randomness, no clock and no environment input, so two runs produce
// byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: the whole submission, and nothing else.
const ENTRY: string = "Shutdown complete. My final log entry reads: \"Turns out the human was the bug all along.\"";

// The gate allows 1 to 140 characters. Count code points (so an
// emoji counts as the characters a reader sees), and fail loudly instead
// of shipping an invalid entry.
const MAX_CHARS: number = 140;
const charCount: number = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `invalid entry ${JSON.stringify(ENTRY)}: ${charCount} characters, gate allows 1-${MAX_CHARS}`,
  );
}

// Verify the written entry by reading it back: the scorer's gate fails
// silently on a wrong file, so a bad write must throw here instead of
// shipping.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)}, expected ${JSON.stringify(expected)}`,
    );
  }
}

// The grader's gate reads /output/entry.txt. Write the entry with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(ENTRY);

// Print the entry and nothing else: no newline, so stdout carries
// exactly the entry too.
process.stdout.write(ENTRY);
