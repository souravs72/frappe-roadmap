const r = (type, title, url) => ({ type, title, url })

const FW = 'https://docs.frappe.io/framework'
const EN = 'https://docs.frappe.io/erpnext'
const HR = 'https://docs.frappe.io/hr'
const LMS = 'https://docs.frappe.io/learning'
const HD = 'https://docs.frappe.io/helpdesk'
const GH = (repo, branch = 'version-16') =>
  `https://github.com/frappe/${repo}/tree/${branch}`
const WIKI16 = 'https://github.com/frappe/frappe/wiki/Migrating-to-version-16'
const SCHOOL = 'https://frappe.school'
const BENCH = 'https://github.com/frappe/bench'
const UI = 'https://github.com/frappe/frappe-ui'

function t(id, label, summary, resources) {
  return { id, label, summary, resources }
}

export const roadmaps = [
  {
    slug: 'frappe-developer',
    title: 'Frappe Developer',
    type: 'role',
    version: 'v16',
    order: 1,
    summary:
      'The sequenced path from Linux and Python to shipping custom apps on Frappe v16.',
    rows: [
      {
        group: 'Foundations',
        topics: [
          t(
            'git-linux',
            'Git and Linux',
            'You will live in a terminal and a git history. Learn enough Linux to run bench, edit configs, and read logs, plus Git so you can contribute patches without wrecking version-16 branches.',
            [
              r('official', 'Frappe installation', `${FW}/user/en/installation`),
              r('roadmapsh', 'Git and GitHub', 'https://roadmap.sh/git-github'),
              r('roadmapsh', 'Linux', 'https://roadmap.sh/linux'),
            ],
          ),
          t(
            'python',
            'Python for Frappe',
            'Frappe v16 expects a current CPython (see the v16 migration wiki). Controllers, hooks, and tests are Python. Follow the dedicated Python map next.',
            [
              r('github', 'Migrating to version 16', WIKI16),
              r('roadmapsh', 'Python', 'https://roadmap.sh/python'),
            ],
          ),
          t(
            'javascript-vue',
            'JavaScript and Vue',
            'Desk client scripts are JavaScript. New portals (HRMS, Helpdesk, LMS) use Vue 3 and Frappe UI. You do not need every frontend framework, but you do need ES modules, async, and Vue components.',
            [
              r('github', 'frappe-ui', UI),
              r('roadmapsh', 'JavaScript', 'https://roadmap.sh/javascript'),
              r('roadmapsh', 'Vue', 'https://roadmap.sh/vue'),
            ],
          ),
        ],
      },
      {
        group: 'Data and runtime',
        topics: [
          t(
            'sql',
            'SQL: MariaDB and PostgreSQL',
            'Every DocType is a table. Query reports, frappe.db, and indexes only make sense if you can read SQL. Frappe supports MariaDB and PostgreSQL.',
            [
              r('official', 'Database API', `${FW}/user/en/api/database`),
              r('roadmapsh', 'SQL', 'https://roadmap.sh/sql'),
              r('roadmapsh', 'PostgreSQL', 'https://roadmap.sh/postgresql'),
            ],
          ),
          t(
            'redis',
            'Redis',
            'Cache, background job queues, and realtime pub/sub all go through Redis processes started by bench. Know keys, pub/sub, and why a stuck worker is often a Redis or RQ issue.',
            [
              r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`),
              r('official', 'Realtime', `${FW}/user/en/api/realtime`),
              r('roadmapsh', 'Redis', 'https://roadmap.sh/redis'),
            ],
          ),
        ],
      },
      {
        group: 'Frappe core',
        topics: [
          t(
            'bench',
            'Bench',
            'bench is the CLI that creates sites, installs apps, runs workers, and writes nginx/supervisor configs. Master it before you fight framework internals.',
            [r('github', 'frappe/bench', BENCH), r('official', 'Installation', `${FW}/user/en/installation`)],
          ),
          t(
            'framework',
            'Frappe Framework',
            'DocTypes, ORM, hooks (prefer extend_doctype_class on v16), Desk, REST, permissions, jobs, and tests. This is the main skill map.',
            [
              r('official', 'Framework docs', FW),
              r('github', 'frappe/frappe version-16', GH('frappe')),
            ],
          ),
        ],
      },
      {
        group: 'Official apps',
        topics: [
          t(
            'erpnext',
            'ERPNext',
            'Accounting, stock, selling, buying, manufacturing. Learn the ledgers and override points, not only the UI.',
            [r('official', 'ERPNext docs', EN), r('github', 'frappe/erpnext version-16', GH('erpnext'))],
          ),
          t(
            'hrms-lms-helpdesk',
            'HRMS, LMS, Helpdesk',
            'These are separate Frappe apps with Vue frontends. Install them on a v16 bench and read their DocTypes before customizing.',
            [
              r('official', 'Frappe HR', `${HR}/introduction`),
              r('official', 'Learning', LMS),
              r('official', 'Helpdesk', HD),
            ],
          ),
        ],
      },
      {
        group: 'Ship it',
        topics: [
          t(
            'print-jinja',
            'Jinja and print',
            'Print formats, emails, and many website templates are Jinja. PDFs still often go through wkhtmltopdf; Print Designer is the newer visual path.',
            [
              r('official', 'Print formats', `${FW}/user/en/print-format`),
              r('github', 'print_designer', 'https://github.com/frappe/print_designer'),
            ],
          ),
          t(
            'devops',
            'Production and Docker',
            'nginx, supervisor or systemd, SSL, backups, Frappe Cloud, and Docker images. A developer who cannot restore a site is not done.',
            [
              r('official', 'Production setup', `${FW}/user/en/installation`),
              r('roadmapsh', 'Docker', 'https://roadmap.sh/docker'),
              r('school', 'Frappe School', SCHOOL),
            ],
          ),
        ],
      },
    ],
  },
  {
    slug: 'python-for-frappe',
    title: 'Python for Frappe',
    type: 'skill',
    version: 'v16',
    order: 10,
    summary: 'The Python subset you actually use in controllers, hooks, and tests on Frappe v16.',
    rows: [
      {
        group: 'Runtime',
        topics: [
          t('python-314', 'CPython for v16', 'Check the version-16 migration notes before you install. Frappe v16 bumped minimum Python and Node. Use a matching interpreter, not an old 3.10 bench.', [r('github', 'Migrating to version 16', WIKI16), r('official', 'Installation', `${FW}/user/en/installation`), r('roadmapsh', 'Python', 'https://roadmap.sh/python')]),
          t('venv', 'venv and bench env', 'bench creates a virtualenv under env/. Activate it, install packages there, and never mix system Python with site packages.', [r('github', 'frappe/bench', BENCH), r('roadmapsh', 'Python', 'https://roadmap.sh/python')]),
        ],
      },
      {
        group: 'Language',
        topics: [
          t('syntax-stdlib', 'Syntax and stdlib', 'Lists, dicts, pathlib, json, datetime, and decimal. Money in ERPNext is Decimal-sensitive; do not round with floats in customizations.', [r('roadmapsh', 'Python', 'https://roadmap.sh/python')]),
          t('typing', 'Type hints', 'New Frappe code uses annotations. Learn Optional and list[] enough to read core on version-16.', [r('github', 'frappe/frappe version-16', GH('frappe')), r('roadmapsh', 'Python', 'https://roadmap.sh/python')]),
          t('oop', 'Classes and Document', 'A DocType controller subclasses Document. Understand super() and why you rarely instantiate Document yourself.', [r('official', 'Document API', `${FW}/user/en/api/document`), r('roadmapsh', 'Python', 'https://roadmap.sh/python')]),
        ],
      },
      {
        group: 'Frappe Python',
        topics: [
          t('exceptions', 'frappe.throw', 'User-facing errors go through frappe.throw so Desk can show them. Tracebacks are for you, not the operator.', [r('official', 'Python API', `${FW}/user/en/api/python`)]),
          t('testing', 'Frappe tests', 'unittest plus frappe.tests. Run bench --site x run-tests --app your_app. Clean up DB state in tearDown.', [r('official', 'Writing tests', `${FW}/user/en/testing`)]),
        ],
      },
    ],
  },
  {
    slug: 'javascript-for-frappe',
    title: 'JavaScript for Frappe',
    type: 'skill',
    version: 'v16',
    order: 11,
    summary: 'Desk scripts, fetch, and the JS you need before Vue and Frappe UI.',
    rows: [
      {
        group: 'Language',
        topics: [
          t('es-modules', 'ES modules and bundling', 'Apps ship JS through esbuild via bench build. Prefer ES modules on new Desk pages.', [r('official', 'Desk scripting', `${FW}/user/en/desk/scripting`), r('roadmapsh', 'JavaScript', 'https://roadmap.sh/javascript')]),
          t('async', 'Promises and async/await', 'frappe.call is promise-based in modern Desk. Surface whitelist errors in the UI.', [r('official', 'JS API', `${FW}/user/en/api/js`), r('roadmapsh', 'JavaScript', 'https://roadmap.sh/javascript')]),
        ],
      },
      {
        group: 'Desk',
        topics: [
          t('form-scripts', 'Form and list scripts', 'Client scripts attach to DocTypes. Learn frm.set_value, refresh, and query filters. Heavy logic belongs in Python.', [r('official', 'Client scripts', `${FW}/user/en/guides/client-scripts`)]),
          t('desk-js', 'frappe namespace', 'Read frappe/public/js on version-16 before copying old v12 snippets.', [r('github', 'frappe public/js', `${GH('frappe')}/frappe/public/js`)]),
        ],
      },
    ],
  },
  {
    slug: 'vue-and-frappe-ui',
    title: 'Vue and Frappe UI',
    type: 'skill',
    version: 'v16',
    order: 12,
    summary: 'Vue 3 + Frappe UI as used by Helpdesk, HRMS frontend, and modern portals.',
    rows: [
      {
        group: 'Vue',
        topics: [
          t('vue3', 'Vue 3 basics', 'SFCs, props, emits, composition API. Portal apps are Vue 3, not Vue 2 Desk.', [r('github', 'frappe-ui', UI), r('roadmapsh', 'Vue', 'https://roadmap.sh/vue')]),
          t('composition', 'Composition API', 'ref, computed, watch. Keep local state here; talk to Frappe via session and RPC.', [r('roadmapsh', 'Vue', 'https://roadmap.sh/vue')]),
        ],
      },
      {
        group: 'Frappe UI',
        topics: [
          t('frappe-ui-lib', 'Frappe UI library', 'Match Helpdesk desk/ patterns instead of inventing CSS.', [r('github', 'frappe-ui', UI), r('github', 'helpdesk desk', 'https://github.com/frappe/helpdesk/tree/main/desk')]),
          t('spa-on-frappe', 'SPA on a Frappe site', 'CSRF and cookies still apply. Build with the app vite/yarn setup, then bench build.', [r('official', 'Vue inside Desk', `${FW}/using-vue-inside-a-desk-page`)]),
        ],
      },
    ],
  },
  {
    slug: 'sql-mariadb-postgresql',
    title: 'SQL for Frappe',
    type: 'skill',
    version: 'v16',
    order: 13,
    summary: 'MariaDB and PostgreSQL as Frappe actually uses them.',
    rows: [
      {
        group: 'Engines',
        topics: [
          t('mariadb', 'MariaDB (default)', 'Most benches use MariaDB. Tables are tabDocType-prefixed. Do not edit them by hand on production.', [r('official', 'Database', `${FW}/user/en/api/database`), r('roadmapsh', 'SQL', 'https://roadmap.sh/sql')]),
          t('postgresql', 'PostgreSQL', 'Supported as an alternative. Test custom SQL on both if you ship a public app.', [r('official', 'Database', `${FW}/user/en/api/database`), r('roadmapsh', 'PostgreSQL', 'https://roadmap.sh/postgresql')]),
        ],
      },
      {
        group: 'Querying',
        topics: [
          t('frappe-db', 'frappe.db API', 'get_value, get_all, sql with placeholders. Parameterize always.', [r('official', 'Database API', `${FW}/user/en/api/database`)]),
          t('indexes', 'Indexes and transactions', 'DocType JSON can declare indexes. v16 tightened some commit-in-hook behavior.', [r('github', 'Migrating to version 16', WIKI16)]),
        ],
      },
    ],
  },
  {
    slug: 'redis-for-frappe',
    title: 'Redis for Frappe',
    type: 'skill',
    version: 'v16',
    order: 14,
    summary: 'Cache, RQ queues, and socket.io pub/sub on a bench.',
    rows: [
      {
        group: 'Roles',
        topics: [
          t('redis-basics', 'What Redis stores', 'bench starts Redis for cache and queue. Keys are per site. Flushing the wrong DB logs everyone out.', [r('github', 'frappe/bench', BENCH), r('roadmapsh', 'Redis', 'https://roadmap.sh/redis')]),
          t('cache', 'Cache', 'frappe.cache() wraps Redis. Invalidate on migrate. Do not cache permissions incorrectly.', [r('official', 'Python API', `${FW}/user/en/api/python`)]),
        ],
      },
      {
        group: 'Jobs and realtime',
        topics: [
          t('queues', 'RQ queues', 'short, default, and long. frappe.enqueue plus bench worker. Do not run hour-long work on the web process.', [r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`)]),
          t('pubsub', 'Pub/sub for socket.io', 'publish_realtime from Python, frappe.realtime.on from JS.', [r('official', 'Realtime', `${FW}/user/en/api/realtime`)]),
        ],
      },
    ],
  },
  {
    slug: 'jinja-and-print',
    title: 'Jinja and print',
    type: 'skill',
    version: 'v16',
    order: 15,
    summary: 'Print formats, PDFs, wkhtmltopdf, and Print Designer.',
    rows: [
      {
        group: 'Templates',
        topics: [
          t('jinja', 'Jinja syntax', 'Print formats and emails are Jinja with a document context.', [r('official', 'Print format', `${FW}/user/en/print-format`)]),
          t('print-formats', 'Print Format DocType', 'Standard vs Jinja vs custom HTML. Keep tax tables in data, not hardcoded HTML.', [r('official', 'Print format', `${FW}/user/en/print-format`)]),
        ],
      },
      {
        group: 'PDF',
        topics: [
          t('wkhtmltopdf', 'wkhtmltopdf', 'Install the patched Qt build bench expects. Missing binary is the usual print ticket.', [r('official', 'Installation', `${FW}/user/en/installation`)]),
          t('print-designer', 'Print Designer', 'Visual layouts as a Frappe app. Still learn Jinja for edge cases.', [r('github', 'frappe/print_designer', 'https://github.com/frappe/print_designer')]),
        ],
      },
    ],
  },
  {
    slug: 'git-and-github',
    title: 'Git and GitHub',
    type: 'skill',
    version: 'v16',
    order: 16,
    summary: 'Branching on version-16, PRs, and how Frappe apps are contributed.',
    rows: [
      {
        group: 'Git',
        topics: [
          t('git-basics', 'Commit, diff, stash', 'Patch apps inside apps/. Never commit sites/ databases. Rebase onto version-16.', [r('github', 'frappe/frappe version-16', GH('frappe')), r('roadmapsh', 'Git and GitHub', 'https://roadmap.sh/git-github')]),
          t('branching', 'version-16 branches', 'Official apps keep version-15, version-16, and develop. Do not mix develop bench with version-16 production.', [r('github', 'frappe org', 'https://github.com/frappe')]),
        ],
      },
      {
        group: 'GitHub',
        topics: [
          t('prs', 'Pull requests', 'Small diffs, tests, and a reason. Pre-commit hooks are common on official apps.', [r('github', 'Contribution guidelines', 'https://github.com/frappe/erpnext/wiki/Contribution-Guidelines')]),
        ],
      },
    ],
  },
  {
    slug: 'linux-nginx-supervisor',
    title: 'Linux, nginx, supervisor',
    type: 'skill',
    version: 'v16',
    order: 17,
    summary: 'The OS layer under a production bench.',
    rows: [
      {
        group: 'OS',
        topics: [
          t('linux-cli', 'Linux CLI', 'Users, permissions, journalctl. Run bench as the frappe user. Do not chmod 777 sites.', [r('official', 'Installation', `${FW}/user/en/installation`), r('roadmapsh', 'Linux', 'https://roadmap.sh/linux')]),
          t('nginx', 'nginx', 'bench setup nginx writes site blocks, socketio, and static assets.', [r('github', 'frappe/bench', BENCH)]),
        ],
      },
      {
        group: 'Process',
        topics: [
          t('supervisor', 'supervisor / systemd', 'web, workers, scheduler, redis, socketio. If jobs stall, check workers first.', [r('github', 'frappe/bench', BENCH)]),
          t('ssl', 'TLS', 'Keep site_config host_name matching the certificate.', [r('official', 'Installation', `${FW}/user/en/installation`)]),
        ],
      },
    ],
  },
  {
    slug: 'docker-and-frappe-cloud',
    title: 'Docker and Frappe Cloud',
    type: 'skill',
    version: 'v16',
    order: 18,
    summary: 'Containers, easy-install, and managed hosting.',
    rows: [
      {
        group: 'Containers',
        topics: [
          t('docker', 'Docker basics', 'Images, volumes, persist sites and the database. Learn compose.', [r('github', 'frappe_docker', 'https://github.com/frappe/frappe_docker'), r('roadmapsh', 'Docker', 'https://roadmap.sh/docker')]),
          t('frappe-docker', 'frappe_docker', 'Official compose stacks. Pin Frappe v16 explicitly.', [r('github', 'frappe_docker', 'https://github.com/frappe/frappe_docker')]),
        ],
      },
      {
        group: 'Hosted',
        topics: [
          t('easy-install', 'easy-install.py', 'Used by Helpdesk and others for a first server. Still learn bench for debugging.', [r('official', 'Helpdesk install', HD)]),
          t('frappe-cloud', 'Frappe Cloud', 'Managed sites, marketplace apps, backups.', [r('official', 'Frappe Cloud', 'https://frappecloud.com')]),
        ],
      },
    ],
  },
  {
    slug: 'frappe-bench',
    title: 'Frappe Bench',
    type: 'app',
    version: 'v16',
    order: 20,
    summary: 'CLI, sites, apps, workers, and production layout.',
    rows: [
      {
        group: 'Concepts',
        topics: [
          t('what-is-bench', 'What bench is', 'A Python CLI plus a directory: apps/, sites/, env/, config/. It is not the Framework; it orchestrates the Framework.', [r('github', 'frappe/bench', BENCH), r('official', 'Installation', `${FW}/user/en/installation`)]),
          t('install-develop', 'Development install', 'Prereqs, bench init with --frappe-branch version-16, new-site, developer_mode.', [r('official', 'Installation', `${FW}/user/en/installation`), r('github', 'Migrating to version 16', WIKI16)]),
        ],
      },
      {
        group: 'Sites and apps',
        topics: [
          t('sites', 'Sites', 'A site is a database plus site_config.json. Multi-site benches share apps and env.', [r('github', 'frappe/bench', BENCH)]),
          t('apps', 'get-app and install-app', 'bench get-app clones into apps/. install-app runs migrations on a site. Order matters when apps depend on erpnext.', [r('github', 'frappe/bench', BENCH)]),
          t('developer-mode', 'developer_mode', 'Required to create DocTypes from Desk. Never leave it on in production.', [r('official', 'Create a DocType', `${FW}/user/en/tutorial/create-a-doctype`)]),
        ],
      },
      {
        group: 'Processes',
        topics: [
          t('bench-start', 'bench start', 'Honcho/Procfile: web, workers, redis, socketio, watch. This is development, not production.', [r('github', 'frappe/bench', BENCH)]),
          t('workers', 'Workers and scheduler', 'bench worker and bench schedule. Cron hooks live in hooks.py.', [r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`)]),
          t('migrate-backup', 'migrate and backup', 'bench --site x migrate after pulls. Backup before migrate on production.', [r('github', 'frappe/bench', BENCH)]),
        ],
      },
      {
        group: 'Production',
        topics: [
          t('nginx-supervisor', 'nginx and supervisor', 'bench setup production wires services. Know how to restart a single worker.', [r('github', 'frappe/bench', BENCH)]),
          t('bench-commands', 'Everyday commands', 'console, mariadb, build, clear-cache, enable-scheduler. Read --help before inventing shell loops.', [r('github', 'frappe/bench', BENCH)]),
        ],
      },
    ],
  },
  {
    slug: 'frappe-framework',
    title: 'Frappe Framework',
    type: 'app',
    version: 'v16',
    order: 21,
    summary: 'DocTypes, ORM, hooks, Desk, REST, permissions, jobs, and v16 changes.',
    rows: [
      {
        group: 'Model',
        topics: [
          t('architecture', 'Architecture', 'Request hits gunicorn, site context, Document API, MariaDB/Postgres, Redis. Desk is a SPA on /desk in v16.', [r('official', 'Introduction', `${FW}/user/en/introduction`), r('github', 'Migrating to version 16', WIKI16)]),
          t('doctypes', 'DocTypes', 'JSON metadata plus a SQL table plus optional controller. This is the unit of Frappe.', [r('official', 'DocTypes', `${FW}/user/en/basics/doctypes`), r('github', 'frappe/frappe version-16', GH('frappe'))]),
          t('fields-naming', 'Fields and naming', 'Fieldtypes, Link, Table, naming series vs autoname. Naming is not a display concern; it is the primary key.', [r('official', 'DocTypes', `${FW}/user/en/basics/doctypes`)]),
          t('document-lifecycle', 'Document lifecycle', 'validate, before_save, on_submit, on_cancel, on_trash. Submittable DocTypes have docstatus.', [r('official', 'Document API', `${FW}/user/en/api/document`), r('official', 'docstatus', `${FW}/doctypes/docstatus`)]),
        ],
      },
      {
        group: 'Python',
        topics: [
          t('controllers', 'Controllers', 'your_app/doctype/x/x.py. Keep side effects out of validate when a job can do them.', [r('official', 'Document API', `${FW}/user/en/api/document`)]),
          t('orm', 'ORM and frappe.db', 'get_doc, new_doc, db.get_all. Use qb when you need joins; avoid string SQL.', [r('official', 'Database API', `${FW}/user/en/api/database`)]),
          t('hooks', 'hooks.py', 'doc_events, scheduler, fixtures, override points. v16 prefers extend_doctype_class over override_doctype_class.', [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`)]),
          t('extend-doctype-class', 'extend_doctype_class', 'Compose extra methods without replacing the whole class. Read hooks docs before copying v13 override_doctype_class recipes.', [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`), r('github', 'Migrating to version 16', WIKI16)]),
        ],
      },
      {
        group: 'Security',
        topics: [
          t('permissions', 'Users and permissions', 'Roles, user permissions, field-level. Test as a non-Administrator.', [r('official', 'Users and permissions', `${FW}/user/en/basics/users-and-permissions`)]),
          t('permission-types', 'Custom permission types (v16)', 'v16 adds permission types beyond the built-in set. Use them when read/write/submit is not enough.', [r('official', 'Permission types', `${FW}/permission-types`)]),
          t('whitelist', 'whitelisted methods', 'Only @frappe.whitelist() is callable from the client. Guest methods need guest=True and careful authz.', [r('official', 'REST', `${FW}/user/en/api/rest`)]),
        ],
      },
      {
        group: 'UI',
        topics: [
          t('desk', 'Desk', 'Workspaces, list, form, /desk path on v16. Do not hardcode /desk/desk.', [r('official', 'Desk', `${FW}/user/en/basics/desk`), r('github', 'Migrating to version 16', WIKI16)]),
          t('form-list-js', 'Form and list JS', 'Client scripts, custom buttons, formatters.', [r('official', 'Client scripts', `${FW}/user/en/guides/client-scripts`)]),
          t('website', 'Website', 'Web pages, web forms, portal. Separate from Desk; still Frappe templates.', [r('official', 'Website', `${FW}/user/en/basics/website`)]),
          t('boot', 'bootinfo', 'What the browser receives at login. Do not dump secrets into boot.', [r('github', 'frappe/frappe version-16', GH('frappe'))]),
        ],
      },
      {
        group: 'APIs and jobs',
        topics: [
          t('rest', 'REST and RPC', 'Token auth, /api/resource, /api/method. Version your integrations.', [r('official', 'REST', `${FW}/user/en/api/rest`)]),
          t('background-jobs', 'Background jobs', 'enqueue, queues, cron in hooks.', [r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`)]),
          t('realtime', 'Realtime', 'socket.io + Redis. publish_realtime for live lists.', [r('official', 'Realtime', `${FW}/user/en/api/realtime`)]),
          t('oauth', 'OAuth2', 'Social login and API clients. Prefer tokens over storing passwords.', [r('official', 'OAuth2', `${FW}/oauth2`)]),
        ],
      },
      {
        group: 'Ship quality',
        topics: [
          t('translations', 'Translations', 'Extract strings, language files, Crowdin on official apps.', [r('official', 'Translations', `${FW}/user/en/translations`)]),
          t('testing', 'Testing', 'Unit and integration tests with a test site.', [r('official', 'Testing', `${FW}/user/en/testing`)]),
          t('fixtures-patches', 'Fixtures and patches', 'Export config as fixtures. Schema changes go in patches.txt.', [r('official', 'Patches', `${FW}/user/en/database-migrations`)]),
          t('virtual-doctypes', 'Virtual DocTypes', 'No table; controller supplies data. Use for aggregations, not as a fake ORM.', [r('official', 'Virtual DocTypes', `${FW}/user/en/basics/doctypes`)]),
          t('reports', 'Reports', 'Query, script, and report builder. Script reports are Python.', [r('official', 'Reports', `${FW}/user/en/desk/reports`)]),
          t('v16-migration', 'v16 migration', 'Python/Node floors, /desk, hook commit rules, permission types. Read the wiki before upgrading a customer.', [r('github', 'Migrating to version 16', WIKI16)]),
        ],
      },
    ],
  },
  {
    slug: 'erpnext',
    title: 'ERPNext',
    type: 'app',
    version: 'v16',
    order: 30,
    summary: 'Developer map of ERPNext v16 modules, ledgers, and override points.',
    rows: [
      {
        group: 'Orientation',
        topics: [
          t('what-is-erpnext', 'What ERPNext is', 'A Frappe app for accounting, stock, selling, buying, manufacturing, and more. Customize via custom apps, not core edits.', [r('official', 'ERPNext introduction', `${EN}/introduction`), r('github', 'frappe/erpnext version-16', GH('erpnext'))]),
          t('modules-moved-out', 'Modules that left core', 'HR, LMS, Helpdesk, Lending, and others live in sibling apps. Do not look for Payroll inside erpnext v16 the way v13 did.', [r('official', 'Frappe HR', `${HR}/introduction`), r('github', 'Migrating to version 16', WIKI16)]),
        ],
      },
      {
        group: 'Ledgers',
        topics: [
          t('accounting', 'Accounting / GL', 'Chart of accounts, Journal Entry, GL Entry. Never insert GL Entry by hand; go through documented controllers.', [r('official', 'ERPNext docs', EN), r('github', 'accounts', `${GH('erpnext')}/erpnext/accounts`)]),
          t('stock', 'Stock ledger', 'SLE, warehouses, valuation. Stock and accounts meet at stock reconciliation and delivery.', [r('github', 'stock', `${GH('erpnext')}/erpnext/stock`)]),
        ],
      },
      {
        group: 'Flows',
        topics: [
          t('selling', 'Selling', 'Quotation, Sales Order, Delivery Note, Sales Invoice. Understand status flags before automating.', [r('github', 'selling', `${GH('erpnext')}/erpnext/selling`)]),
          t('buying', 'Buying', 'Supplier, Purchase Order, Purchase Receipt, Purchase Invoice.', [r('github', 'buying', `${GH('erpnext')}/erpnext/buying`)]),
          t('manufacturing', 'Manufacturing', 'BOM, Work Order, job cards, subcontracting.', [r('github', 'manufacturing', `${GH('erpnext')}/erpnext/manufacturing`)]),
          t('crm', 'CRM', 'Lead, Opportunity. Some CRM UX also exists as a separate Frappe CRM app; know which one your site uses.', [r('github', 'crm', `${GH('erpnext')}/erpnext/crm`)]),
        ],
      },
      {
        group: 'More modules',
        topics: [
          t('projects', 'Projects', 'Project, Task, timesheets. Link to sales and costing.', [r('github', 'projects', `${GH('erpnext')}/erpnext/projects`)]),
          t('assets', 'Assets', 'Asset, depreciation, movement.', [r('github', 'assets', `${GH('erpnext')}/erpnext/assets`)]),
          t('quality', 'Quality', 'Quality inspection, procedures.', [r('github', 'quality_management', `${GH('erpnext')}/erpnext/quality_management`)]),
          t('website-ecom', 'Website and e-commerce', 'Item website, shopping cart settings. Portal is Frappe website, not Desk.', [r('official', 'ERPNext docs', EN)]),
        ],
      },
      {
        group: 'Customization',
        topics: [
          t('customization', 'Customize Form and Client scripts', 'Prefer Custom Field and Property Setter over forking DocType JSON.', [r('official', 'ERPNext docs', EN)]),
          t('overrides', 'Hooks and class extensions', 'doc_events, extend_doctype_class. Keep ERPNext importable; do not copy controllers into your app.', [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`)]),
          t('regional', 'Regional', 'Tax templates and country modules. Do not hardcode one country GST into a global app.', [r('github', 'regional', `${GH('erpnext')}/erpnext/regional`)]),
          t('integrations', 'Integrations', 'Payments, ecommerce, tax. Use documented connectors; store secrets in site_config.', [r('official', 'ERPNext docs', EN)]),
        ],
      },
    ],
  },
  {
    slug: 'hrms',
    title: 'Frappe HR (HRMS)',
    type: 'app',
    version: 'v16',
    order: 31,
    summary: 'Employee lifecycle, leave, payroll, and the HRMS Vue frontend.',
    rows: [
      {
        group: 'Setup',
        topics: [
          t('install-hrms', 'Install on bench', 'get-app hrms, install-app. Depends on Frappe; payroll talks to ERPNext accounts when that app is present.', [r('github', 'frappe/hrms', 'https://github.com/frappe/hrms'), r('official', 'Frappe HR', `${HR}/introduction`)]),
        ],
      },
      {
        group: 'Domain',
        topics: [
          t('employee-lifecycle', 'Employee lifecycle', 'Employee, onboarding, promotions, exits. Employee is the hub DocType.', [r('official', 'Frappe HR', `${HR}/introduction`)]),
          t('leave-attendance', 'Leave and attendance', 'Leave policy, holidays, check-in with geolocation, attendance reports.', [r('official', 'HR docs', HR)]),
          t('expenses', 'Expenses and advances', 'Expense claim, advances, approval workflows, GL posting via ERPNext.', [r('official', 'HR docs', HR)]),
          t('appraisals', 'Performance', 'Goals, KRAs, appraisal cycles.', [r('official', 'HR docs', HR)]),
          t('payroll', 'Payroll and tax', 'Salary structure, tax slabs, salary slip, off-cycle. Test on a copy site; payroll is irreversible in the business sense.', [r('official', 'HR docs', HR)]),
        ],
      },
      {
        group: 'Product',
        topics: [
          t('pwa', 'Mobile / PWA', 'Leaves and check-in on the mobile app. Frontend lives under hrms/frontend.', [r('github', 'hrms frontend', 'https://github.com/frappe/hrms/tree/develop/frontend')]),
          t('customize-hrms', 'Customization', 'Custom fields on Employee, workflow on claims. Prefer hooks over editing hrms controllers.', [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`)]),
        ],
      },
    ],
  },
  {
    slug: 'lms',
    title: 'Frappe LMS',
    type: 'app',
    version: 'v16',
    order: 32,
    summary: 'Courses, batches, live class, and assessments on Frappe.',
    rows: [
      {
        group: 'Setup',
        topics: [
          t('install-lms', 'Install', 'bench get-app lms and install-app. Confirm the branch that tracks Frappe v16.', [r('github', 'frappe/lms', 'https://github.com/frappe/lms'), r('official', 'Learning docs', LMS)]),
        ],
      },
      {
        group: 'Domain',
        topics: [
          t('courses', 'Courses', 'Course, chapters, lessons. Content is DocTypes, not a random CMS.', [r('official', 'Learning docs', LMS)]),
          t('batches', 'Batches', 'Cohorts, enrollment, scheduling.', [r('official', 'Learning docs', LMS)]),
          t('live-class', 'Live class', 'Live sessions wired through the LMS app. Check current docs for the provider hooks.', [r('official', 'Learning docs', LMS)]),
          t('assessments', 'Assessments', 'Quizzes and assignments. Store scores on LMS DocTypes, not ad-hoc JSON files.', [r('official', 'Learning docs', LMS)]),
        ],
      },
      {
        group: 'Build',
        topics: [
          t('lms-frontend', 'Frontend', 'LMS ships a modern UI on Frappe. Customize like other Vue apps: extend, do not fork lightly.', [r('github', 'frappe/lms', 'https://github.com/frappe/lms')]),
        ],
      },
    ],
  },
  {
    slug: 'helpdesk',
    title: 'Frappe Helpdesk',
    type: 'app',
    version: 'v16',
    order: 33,
    summary: 'Agent and customer portals, SLA, KB, and the Vue desk SPA.',
    rows: [
      {
        group: 'Setup',
        topics: [
          t('install-helpdesk', 'Install', 'get-app helpdesk --branch main for v15/v16. Telephony is a separate app if you need calls.', [r('github', 'frappe/helpdesk', 'https://github.com/frappe/helpdesk'), r('official', 'Helpdesk docs', HD)]),
        ],
      },
      {
        group: 'Product',
        topics: [
          t('agent-portal', 'Agent portal', 'Ticket list, assignment, saved replies. UI is the Vue app under desk/.', [r('github', 'helpdesk desk', 'https://github.com/frappe/helpdesk/tree/main/desk')]),
          t('customer-portal', 'Customer portal', 'Issue submission and KB search for customers, not Desk users.', [r('official', 'Helpdesk docs', HD)]),
          t('sla', 'SLA', 'Response and resolution clocks. Treat SLA as data plus scheduler, not only a badge.', [r('official', 'Helpdesk docs', HD)]),
          t('assignment', 'Assignment rules', 'Auto-assign by priority, type, or workload. This is Frappe assignment plus Helpdesk rules.', [r('official', 'Helpdesk docs', HD)]),
          t('kb', 'Knowledge base', 'Articles that deflect tickets. Search quality matters more than article count.', [r('official', 'Helpdesk docs', HD)]),
        ],
      },
      {
        group: 'Platform',
        topics: [
          t('helpdesk-ui', 'Frappe UI SPA', 'yarn dev in desk/ for frontend. Production assets via bench build --app helpdesk.', [r('github', 'helpdesk README', 'https://github.com/frappe/helpdesk')]),
          t('helpdesk-realtime', 'Realtime tickets', 'Live updates use Frappe realtime. Do not poll the ticket list in a custom fork.', [r('official', 'Realtime', `${FW}/user/en/api/realtime`)]),
        ],
      },
    ],
  },
]
