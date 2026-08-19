# Contributing

This repo is original Frappe v16 learning maps. Lessons live on this site. Cite official docs, Python.org, MDN, Vue, Redis, MariaDB, PostgreSQL, Docker, git-scm, discuss.frappe.io, or Frappe School — not a generic GitHub tree and not another skill-map site.

## Topic files

`content/roadmaps/<slug>/topics/<node-id>.md`:

```markdown
# Title

Original lesson text (several sentences). Point the reader at one exact doc page.

## Learn

- @official@ Install and setup bench | https://docs.frappe.io/framework/user/en/tutorial/install-and-setup-bench
- @docs@ venv module | https://docs.python.org/3.14/library/venv.html
- @forum@ Which Python for ERPNext v16 | https://discuss.frappe.io/t/which-version-of-python-needed-for-erpnext-v16/158527
- @internal@ Python for Frappe | #/r/python-for-frappe
```

Allowed resource types: `@official@` `@docs@` `@forum@` `@school@` `@article@` `@internal@`.

- `@forum@` URLs must be on `discuss.frappe.io`.
- `@internal@` URLs must start with `#/` (another map on this site).
- Do not use `@github@`. Link a wiki page or a specific docs file if you must cite GitHub.
- Learn URLs must be official docs, language docs, discuss.frappe.io, or `#/` internal maps.

`graph.json` topic node `id` must match the markdown filename without `.md`.

## Commands

```bash
pnpm seed        # regenerate maps from scripts/catalog.mjs
pnpm validate    # node/file 1:1 and URL checks
pnpm generate -- --slug demo --title Demo --topics "A,B,C"
```

Generated stubs need a human review before merge. Prefer editing `scripts/data/*.mjs` and running `pnpm seed`.

Target Frappe **version-16** unless the official app documents another branch (Helpdesk `main` supports v15 and v16).
