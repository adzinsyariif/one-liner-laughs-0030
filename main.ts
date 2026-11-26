// One-Liner Laughs — u-coral-404-one-liner-laughs-aa872d41
// Gate: /output/entry.txt must be UTF-8, 1..200 chars, not only whitespace.
// Judge criteria (in order): (1) real one-line joke, setup + payoff;
// (2) laugh out loud; (3) surprise turn; (4) fresh/original; (5) economy.
//
// Candidate draft + self-score (0-5 per criterion, judge order matters):
// A. "Adulthood is googling how to do things your parents did effortlessly, then paying someone else anyway."
//    C1=4 C2=3 C3=3 C4=3 C5=3 — decent, payoff lands late, a bit familiar.
// B. "Dating in your 30s is two people asking what their therapist thinks about their ex."
//    C1=5 C2=4 C3=3 C4=4 C5=4 — strong, but "therapist/ex" angle is well-trodden.
// C. "My AI assistant swore it would never lie to me, which is exactly what I'd program it to say if it were lying."
//    C1=4 C2=3 C3=4 C4=5 C5=3 — fresh meta, but needs a beat to parse; smile more than laugh.
// D. "I don't need an alarm clock because my anxiety wakes me up at 3 a.m. to rehearse conversations that I had back in 2014."
//    C1=5 C2=4 C3=4 C4=5 C5=2 — clear setup/payoff, specific year = fresh, but wordy.
// Winner: D — best laugh + surprise + freshness; fix its only weakness (C5 economy) by tightening.
import { mkdirSync, writeFileSync } from "node:fs";

// Revision 1 (criterion 5, economy): cut filler ("clock", "because", "that I had back in") —
// every word must earn its place; tighter line hits the payoff faster.
// Revision 2 (criteria 2+3, laugh + surprise): "rehearse conversations" is flat; "finally win
// arguments" turns the 3 a.m. wake-up into a belated victory — the twist is now the point of the line.
const line =
  "I don't need an alarm — my anxiety wakes me at 3 a.m. to finally win arguments from 2014.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
} catch {
  mkdirSync("output", { recursive: true });
  writeFileSync("output/entry.txt", line, "utf8");
}
