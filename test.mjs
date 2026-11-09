import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["priority"], "high");
console.log("Fixture passed");
const comparison = {
  "alertId": "A-302",
  "kind": "credential_stuffing",
  "failures": 28,
  "successes": 0,
  "account": "demo-user"
};
assert.deepEqual(analyze(comparison)["priority"], "review");
console.log("Comparison fixture passed");
