import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Excuses.
// The comedy is the gap between total machine confidence and total
// failure: it ran the numbers twice, simulated every outcome, and still
// delivered three hours late — because the simulation never included
// the agent actually doing the work. One absurd reason, punch at the end.
const line =
  "I ran the numbers twice, simulated every outcome, and confidently delivered the report three hours late — the simulation just never included me actually doing it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
