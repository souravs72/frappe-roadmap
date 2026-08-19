# frappe-roadmap

Interactive developer roadmaps for **Frappe v16**: bench, Framework, ERPNext, HRMS, LMS, Helpdesk, plus the Python / JavaScript / Vue / SQL / Redis / print / Linux / Docker skills those apps actually need.


## Use it

```bash
pnpm install
pnpm seed
pnpm validate
pnpm dev
```

Open the local URL Vite prints. Maps are under `#/r/<slug>`.

## Catalog

| Slug | Kind |
| --- | --- |
| `frappe-developer` | Role path |
| `python-for-frappe` | Skill (links to roadmap.sh/python) |
| `javascript-for-frappe` | Skill |
| `vue-and-frappe-ui` | Skill |
| `sql-mariadb-postgresql` | Skill |
| `redis-for-frappe` | Skill |
| `jinja-and-print` | Skill |
| `git-and-github` | Skill |
| `linux-nginx-supervisor` | Skill |
| `docker-and-frappe-cloud` | Skill |
| `frappe-bench` | Bench CLI |
| `frappe-framework` | Framework |
| `erpnext` | ERPNext v16 |
| `hrms` | Frappe HR |
| `lms` | Frappe LMS |
| `helpdesk` | Frappe Helpdesk |

Sources: [docs.frappe.io](https://docs.frappe.io/framework), [frappe GitHub](https://github.com/frappe) `version-16`, [v16 migration wiki](https://github.com/frappe/frappe/wiki/Migrating-to-version-16).

## Deploy

GitHub Pages builds from `main` with `VITE_BASE=/frappe-roadmap/`. Enable Pages on the `github-pages` environment after the first workflow run.

## License

MIT. Not affiliated with Frappe Technologies or roadmap.sh.
