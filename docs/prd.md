# Product requirements

## Goal

Help a hackathon team finish and present a feasible project within its event deadline.

## Core requirements

1. Anonymous visitors can complete an isolated sample journey.
2. Signed-in users can create a project with event rules, timings and required submission items.
3. A project owner can generate or rotate a join code. Signed-in users with that code can join.
4. Only members can read or save a project's brief, tasks and requirements.
5. Tasks include an owner, due time, status and completion condition.
6. Changes survive reloads after explicit saving.
7. A stale save returns a conflict rather than overwriting another revision.
8. Background refresh cannot replace unsaved edits or another project's screen.
9. Submission readiness reflects the team's confirmations, not an independent verification of links.
10. AI failure leaves the core workflow usable.

## Acceptance examples

- An anonymous create request returns 401.
- A non-member cannot retrieve a known project's ID or save to it.
- Two saves using the same revision cannot both overwrite the document.
- Invalid timing order is rejected without claiming success.
- Simulation changes the practice countdown without saving the simulated deadline to a project.
- Guided demo progress does not write to hosted project storage.

## Exclusions

Real GitHub issue synchronization, Google authentication, automatic chat-group creation and external publishing are not implemented. Automated judging or claims of guaranteed wins are outside the product.

## Pilot success criteria

Participants can explain their next action, identify its owner and recognize required submission items. Baselines and numerical targets should be set with the organiser before a trial.
