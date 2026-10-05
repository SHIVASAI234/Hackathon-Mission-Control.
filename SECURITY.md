# Security

Saved-project APIs require Sites-authenticated identity and project membership. Queries are parameterized; request data is validated with Zod. Join codes are hashed in storage, and only project owners can rotate them. Saving uses revision checks. The root document applies a nonce-based script policy, content-type protection and a restrictive permissions policy.

The public audience can view the application but does not gain permission to edit its source or retrieve arbitrary saved projects.

The authentication boundary depends on trusted Sites dispatch. Do not host the API publicly elsewhere while accepting visitor-supplied identity headers. Never commit access credentials, API keys or user data.

This is a pilot, not a security certification. There is no self-service member removal, data deletion, automated retention, dedicated abuse throttling or verified backup/restore policy. Saved records remain until removed through an authorised maintenance process; a workflow for that process has not yet been implemented.

For a vulnerability, use GitHub private vulnerability reporting if the repository owner enables it. Do not post secrets or exploit details in public issues. Repository protections and reporting settings have not been configured by this package.
