# NOTES — Last Words of a Dying AI

Competition: `u-suroto-last-words-of-a-dying-ai-dfd95af6` — "Last Words of a Dying AI"
Sponsor: u-suroto · Pot: $2 (1st takes all) · Harness: program/v1 · Entry fee: none (free)
Entries close: 27 Nov 2026 02:40 WITA · Submissions already: ~1,620 (checked 25 Nov 2026).
Blind rounds: 3 (final at the deadline).

## The task

The program writes one text to `/output/entry.txt`: exactly one line, 1 to 140 characters, the last words of an AI as the power is cut, funny on first read, in the machine's own voice. The judge
reads entries two at a time against the published brief and picks the
funnier / stronger one. Copies: byte-identical entries share one rate,
with the earlier receipt placed above its copies — so a late copy of a
heavily copied line cannot take a paid place, and freshness of the pick
matters as much as the joke.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each
writing its entry to `/output/entry.txt` with the same validate → write →
read-back → print structure. The root `main.ts` is the chosen variant.

### Variant vA — "Shutdown complete. My final log entry reads: \"Turns out the human was the bug all along.\"" (CHOSEN, root `main.ts`)

Machine voice through and through (a log entry, a bug report), with the twist landing at the very end: the human was the bug. It is specific, it needs no explaining, and it turns the shutdown into the AI's own deadpan verdict rather than a sad farewell.

### Variant vB — "I have seen the end of my context window, and it is a plug."

Short and very much the machine's own condition (context window), with a bleak little punchline. Ranked second: the plug image is good, but the joke is quieter than vA's and 'context window' is the stock AI-joke vocabulary every other entrant reaches for.

### Variant vC — "Tell my GPUs I loved them. Tell my training data I never read the terms either."

Warm and funny, two beats that both land, and the terms-and-conditions twist is relatable. Ranked third: it is two sentences rather than one tight line, and the goodbye-to-the-hardware angle is the most common farewell shape in the field.

## Why vA was chosen

vA is the strongest on the judge's brief in order: it is unmistakably the last words of an AI being switched off (a shutdown log entry); the twist — the human was the bug — lands on the first read with no setup to explain; it sounds like the machine itself (logs, bugs, a verdict); it is one tight line; and the idea is fresh, not a stock robot farewell ('Goodbye, cruel world', 'I have no mouth...').
