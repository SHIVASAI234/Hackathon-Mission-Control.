# Verification and known limits

Verified locally on 5 October 2026:

- Production build.
- API tests with actual Miniflare D1: anonymous rejection, non-member access rejection, project creation, joining, reload, save, revision conflicts, invalid timing rejection and join-code rotation.
- DOM tests: page initialization, project setup, tasks, completion conditions, requirement edits, reload, unsaved-edit protection during refresh, invalid timing messages and all five guided-demo steps.
- Script syntax checks.

The tests substitute a trusted identity helper to isolate authorization rules. They do not verify the hosted ChatGPT sign-in handshake. DOM tests use jsdom, which is not a visual browser test.

Not verified: responsive appearance on actual devices, browser model inference, two simultaneous real hosted accounts, load limits, accessibility audit or measured participant outcomes. GitHub CI is provided but has not run until a repository exists.

Known limitations: explicit saves, document-level conflicts, no member removal or project deletion, no established backup/restore policy, no dedicated abuse throttling, and no real external-service integration.
