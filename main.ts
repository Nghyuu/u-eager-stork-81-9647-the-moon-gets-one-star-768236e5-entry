import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const review =
  "4.5 billion years together and it still won't show me its other side. What's it hiding? One star.";

if ([...review].length > 120 || review.trim().length === 0) {
  throw new Error("review must be 1 to 120 characters");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, review + "\n", "utf8");
chmodSync(entryPath, 0o644);
