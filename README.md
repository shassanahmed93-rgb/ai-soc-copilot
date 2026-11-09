# AI SOC Copilot

Explain a detection and generate evidence-linked investigation steps.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/ai-soc-copilot/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "alertId": "A-301",
  "priority": "high",
  "explanation": "Repeated failures followed by a successful login suggest possible credential stuffing.",
  "evidence": [
    "28 failed logins",
    "1 successful logins",
    "Account: demo-user"
  ],
  "nextSteps": [
    "Verify the successful session and source IP",
    "Correlate MFA and device events",
    "Record evidence before containment"
  ]
}
```

## Scope

Synthetic lab inputs and deterministic rules. Review results before applying them to a real incident. The workflow currently uses rules or templates and has no model integration.
