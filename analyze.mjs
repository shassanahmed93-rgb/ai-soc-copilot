export function analyze(input) {
  const likely = input.kind === "credential_stuffing" && input.failures >= 10 && input.successes > 0;
  return {alertId: input.alertId, priority: likely ? "high" : "review", explanation: likely ? "Repeated failures followed by a successful login suggest possible credential stuffing." : "The supplied evidence does not meet the credential-stuffing rule.", evidence: [input.failures + " failed logins", input.successes + " successful logins", "Account: " + input.account], nextSteps: ["Verify the successful session and source IP", "Correlate MFA and device events", "Record evidence before containment"]};
}
