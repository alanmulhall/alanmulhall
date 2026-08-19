---
description: Check required env vars for a platform
agent: build
---

Load the `env-vars` skill and follow its instructions to check environment variables for the $ARGUMENTS platform.

List all required and optional variables for the specified platform (web, admin, or android), then run `printenv` to check which ones are currently set. Report missing required vars, missing optional vars, and any vars that are set but empty.
