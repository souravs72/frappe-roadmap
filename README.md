# frappe-roadmap

Interactive developer roadmaps for **Frappe v16**: bench, Framework, ERPNext, HRMS, LMS, Helpdesk, plus the Python / JavaScript / Vue / SQL / Redis / print / Linux / Docker skills those apps actually need.

Lessons are original and hosted in this app. Learn links go to exact pages on docs.frappe.io, language/runtime docs, discuss.frappe.io, or other maps on this site.

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
| `frappe-developer` | Role path (numbered groups) |
| `python-for-frappe` | Skill |
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

Edit maps in `scripts/data/`, then `pnpm seed`. Sources include [docs.frappe.io](https://docs.frappe.io/framework), the [v16 migration wiki](https://github.com/frappe/frappe/wiki/Migrating-to-version-16), and [discuss.frappe.io](https://discuss.frappe.io).

## Deploy

GitHub Pages builds from `main` with `VITE_BASE=/frappe-roadmap/`. Enable Pages on the `github-pages` environment after the first workflow run.

## License

MIT. Not affiliated with Frappe Technologies. See [NOTICE](NOTICE).
