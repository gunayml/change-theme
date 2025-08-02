const fs = require("fs");
const { createCoverageMap } = require("istanbul-lib-coverage");

if (!fs.existsSync("./coverage/coverage-final.json")) {
  console.error(
    "❌ coverage-final.json not found. Did you run tests with --coverage?"
  );
  process.exit(1);
}

const raw = JSON.parse(
  fs.readFileSync("./coverage/coverage-final.json", "utf8")
);
const map = createCoverageMap(raw);

let failed = false;

map.files().forEach((file) => {
  const summary = map.fileCoverageFor(file).toSummary();
  const linesPct = summary.lines.pct;

  if (linesPct < 90) {
    console.error(`❌ ${file} - Line coverage too low: ${linesPct}%`);
    failed = true;
  } else {
    console.log(`✅ ${file} - Line coverage: ${linesPct}%`);
  }
});

if (failed) {
  process.exit(1);
}
