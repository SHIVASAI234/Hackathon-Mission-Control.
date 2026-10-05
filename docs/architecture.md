# Architecture and decisions

The current interface is a retained HTML/JavaScript prototype. A Vinext route serves the document; static scripts implement the shared-project and guided-demo layers. This minimizes UI migration while adding durable storage.

Project APIs run in Cloudflare Workers. Sites dispatch supplies the authenticated user identity. Each API operation checks authentication and membership before returning or modifying project data. Project join codes are random UUID-derived tokens whose SHA-256 hashes are stored in D1.

D1 stores two tables: `projects` and `members`. Each project holds a validated JSON document and revision. A save updates only when its submitted revision matches, providing optimistic concurrency protection. The client polls for updates every ten seconds and defers refresh while editing or saving.

```mermaid
sequenceDiagram
  participant Browser
  participant API
  participant DB as D1
  Browser->>API: Save document and current revision
  API->>DB: Check membership
  API->>DB: Update where revision matches
  alt Revision matches
    DB-->>API: One row updated
    API-->>Browser: New revision
  else Another save already happened
    DB-->>API: No row updated
    API-->>Browser: 409 conflict; keep unsaved text
  end
```

The optional AI worker downloads a pinned Transformers.js library and FLAN-T5 Small model files. Text inference occurs locally. Loading and inference are not fully browser-verified. Guidance about deadlines and scope uses deterministic rules rather than a model.

Logical binding: `DB` for D1. Hosted resources and authentication are platform-owned. A clean GitHub export removes the live Site identifier; creating a new deployment must register its own identity. Hosting outside Sites requires replacing the trusted dispatch identity boundary.

Tradeoffs: document-level conflicts require manual reconciliation; polling is simpler than live sockets; the retained monolithic HTML is fast to iterate but should be split into modules as the pilot grows.
