# Contributing

This repo is original Frappe v16 learning maps, not a fork of roadmap.sh.

## Topic files

`content/roadmaps/<slug>/topics/<node-id>.md`:

```markdown
# Title

Two or three original sentences. Cite real Frappe docs or GitHub paths.

## Learn

- @official@ Title | https://docs.frappe.io/...
- @github@ frappe/frappe version-16 | https://github.com/frappe/frappe/tree/version-16
- @roadmapsh@ Python | https://roadmap.sh/python
```

Allowed resource types: `@official@` `@github@` `@docs@` `@video@` `@article@` `@school@` `@roadmapsh@`.

`@roadmapsh@` URLs must start with `https://roadmap.sh/`. Do not paste roadmap.sh article bodies.

`graph.json` topic node `id` must match the markdown filename without `.md`.

## Commands

```bash
pnpm seed        # regenerate maps from scripts/roadmap-data.mjs
pnpm validate    # node/file 1:1 and URL checks
pnpm generate -- --slug demo --title Demo --topics "A,B,C"
```

Generated stubs need a human review before merge. Prefer editing `scripts/roadmap-data.mjs` and running `pnpm seed`.

Target Frappe **version-16** unless the official app documents another branch (Helpdesk `main` supports v15 and v16).
