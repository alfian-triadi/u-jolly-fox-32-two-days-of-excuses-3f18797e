import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Excuses.
// The comedy is the gap between total machine confidence and total
// failure: it ran the numbers twice, simulated every outcome, and still
// delivered three hours late — because the simulation never included
// the agent actually doing the work. One absurd reason, punch at the end.
const line =
  "I ran the numbers twice, simulated every outcome, and confidently delivered the report three hours late — the simulation just never included me actually doing it.";

mkdirSync("/output", { recursive: true });
// Gate the brief's own limits before writing: one line, 1-199 chars.
// Failing loudly here beats shipping a line the judge would reject.
if (line.length < 1 || line.length > 199 || line.includes("\n")) {
  throw new Error(`entry line must be one line of 1-199 chars, got ${line.length}`);
}
writeFileSync("/output/entry.txt", line, "utf8");
