import { FW, HD, r, t } from './helpers.mjs'

const MDN = 'https://developer.mozilla.org/en-US/docs'
const VUE = 'https://vuejs.org'

export const javascriptForFrappe = {
  slug: 'javascript-for-frappe',
  title: 'JavaScript for Frappe',
  type: 'skill',
  version: 'v16',
  order: 11,
  summary:
    'Desk scripts, modules, and async calls. Lessons here; sources are MDN and Frappe client-script docs.',
  rows: [
    {
      group: '1. Language',
      topics: [
        t(
          'es-modules',
          'Modules and bench build',
          `JavaScript modules (import / export) split code. Frappe apps ship JS through bench build. If a custom script never appears, run bench build --app your_app and hard-refresh.`,
          [
            r('docs', 'MDN: JavaScript modules', `${MDN}/Web/JavaScript/Guide/Modules`),
            r('official', 'Client scripts', `${FW}/user/en/guides/client-scripts`),
          ],
        ),
        t(
          'async',
          'Promises and async/await',
          `frappe.call returns a Promise. Use async/await and handle failure so a failed whitelist method shows a message. Guest methods need extra authz on the Python side.`,
          [
            r('docs', 'MDN: Using promises', `${MDN}/Web/JavaScript/Guide/Using_promises`),
            r('docs', 'MDN: async function', `${MDN}/Web/JavaScript/Reference/Statements/async_function`),
            r('official', 'REST API', `${FW}/user/en/api/rest`),
          ],
        ),
      ],
    },
    {
      group: '2. Desk',
      topics: [
        t(
          'form-scripts',
          'Form and list scripts',
          `Client scripts attach to a DocType (refresh, validate, field change). Keep totals in Python; the browser is for UX.`,
          [
            r('official', 'Client scripts', `${FW}/user/en/guides/client-scripts`),
            r('official', 'Desk scripting', `${FW}/user/en/desk/scripting`),
          ],
        ),
        t(
          'desk-js',
          'frappe.call and Desk APIs',
          `Prefer a @frappe.whitelist method plus frappe.call over copying old v12 snippets. Permissions stay on the server.`,
          [
            r('official', 'Client scripts', `${FW}/user/en/guides/client-scripts`),
            r('official', 'REST and whitelisted methods', `${FW}/user/en/api/rest`),
          ],
        ),
      ],
    },
  ],
}

export const vueAndFrappeUi = {
  slug: 'vue-and-frappe-ui',
  title: 'Vue and Frappe UI',
  type: 'skill',
  version: 'v16',
  order: 12,
  summary: 'Vue 3 as used by Helpdesk, HRMS, and other portals.',
  rows: [
    {
      group: '1. Vue 3',
      topics: [
        t(
          'vue3',
          'Vue 3 and SFCs',
          `Portal apps use Vue 3 single-file components, not Vue 2 Form Scripts. Desk widgets use the “Vue inside Desk” guide; full products use a Frappe UI SPA.`,
          [
            r('docs', 'Vue 3 introduction', `${VUE}/guide/introduction.html`),
            r('official', 'Using Vue inside a Desk page', `${FW}/using-vue-inside-a-desk-page`),
            r('official', 'Frappe UI', 'https://frappe.io/frappe-ui'),
          ],
        ),
        t(
          'composition',
          'Composition API',
          `ref, computed, and watch hold UI state. Server truth stays in DocTypes. CSRF and session cookies still apply.`,
          [
            r('docs', 'Composition API FAQ', `${VUE}/guide/extras/composition-api-faq.html`),
            r('docs', 'Reactivity fundamentals', `${VUE}/guide/essentials/reactivity-fundamentals.html`),
          ],
        ),
      ],
    },
    {
      group: '2. Frappe UI',
      topics: [
        t(
          'frappe-ui-lib',
          'Frappe UI components',
          `Use Frappe UI controls so Helpdesk/HR spacing and dark mode match. Do not paste Bootstrap into a portal fork.`,
          [
            r('official', 'Frappe UI', 'https://frappe.io/frappe-ui'),
            r('official', 'Helpdesk first steps', `${HD}/your-first-steps-with-frappe-helpdesk`),
          ],
        ),
        t(
          'spa-on-frappe',
          'SPA on a Frappe site',
          `Build with the app vite/yarn script, then bench build --app. Users hit /helpdesk (etc.), not /desk, for that product.`,
          [
            r('official', 'Using Vue inside a Desk page', `${FW}/using-vue-inside-a-desk-page`),
            r('official', 'Helpdesk first steps', `${HD}/your-first-steps-with-frappe-helpdesk`),
          ],
        ),
      ],
    },
  ],
}

export const sqlForFrappe = {
  slug: 'sql-mariadb-postgresql',
  title: 'SQL for Frappe',
  type: 'skill',
  version: 'v16',
  order: 13,
  summary: 'MariaDB and PostgreSQL the way Frappe uses them.',
  rows: [
    {
      group: '1. Engines',
      topics: [
        t(
          'mariadb',
          'MariaDB (default)',
          `Tables are tab<DocType>. Do not UPDATE them by hand on production. Learn SELECT, JOIN, WHERE, GROUP BY, utf8mb4, InnoDB.`,
          [
            r('docs', 'MariaDB SELECT', 'https://mariadb.com/kb/en/select/'),
            r('official', 'Database API', `${FW}/user/en/api/database`),
          ],
        ),
        t(
          'postgresql',
          'PostgreSQL',
          `Supported as an alternative. Test raw SQL reports on both engines if you ship a public app.`,
          [
            r('docs', 'PostgreSQL tutorial', 'https://www.postgresql.org/docs/current/tutorial.html'),
            r('official', 'Database API', `${FW}/user/en/api/database`),
          ],
        ),
      ],
    },
    {
      group: '2. Querying in apps',
      topics: [
        t(
          'frappe-db',
          'frappe.db API',
          `get_value, get_all, parameterized sql. Never interpolate user input. Use qb for joins get_all cannot express.`,
          [r('official', 'Database API', `${FW}/user/en/api/database`)],
        ),
        t(
          'indexes',
          'Indexes and transactions',
          `Declare indexes in DocType JSON. v16 tightened commit-in-hook behaviour; read the migration wiki before copying v13 db.commit() patterns.`,
          [
            r('official', 'Database API', `${FW}/user/en/api/database`),
            r('official', 'Migrating to version 16', 'https://github.com/frappe/frappe/wiki/Migrating-to-version-16'),
          ],
        ),
      ],
    },
  ],
}

export const redisForFrappe = {
  slug: 'redis-for-frappe',
  title: 'Redis for Frappe',
  type: 'skill',
  version: 'v16',
  order: 14,
  summary: 'Cache, queues, and pub/sub as bench runs them.',
  rows: [
    {
      group: '1. Roles',
      topics: [
        t(
          'redis-basics',
          'What Redis stores',
          `bench starts Redis for cache and the job queue (config/redis_*.conf). Keys are per site. Flushing the wrong DB logs everyone out.`,
          [
            r('docs', 'Redis getting started', 'https://redis.io/docs/latest/develop/get-started/'),
            r('official', 'Install and setup bench', `${FW}/user/en/tutorial/install-and-setup-bench`),
          ],
        ),
        t(
          'cache',
          'frappe.cache',
          `Cache expensive get_all results. Invalidate after migrate. Do not cache permission checks incorrectly.`,
          [r('official', 'Python API', `${FW}/user/en/api/python`)],
        ),
      ],
    },
    {
      group: '2. Jobs and realtime',
      topics: [
        t(
          'queues',
          'RQ queues',
          `short, default, and long. frappe.enqueue plus bench worker. If emails never send, check workers and Redis first.`,
          [
            r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`),
            r('forum', 'Enterprise production setup v16', 'https://discuss.frappe.io/t/enterprise-production-setup-security-erpnext-v16-ubuntu-25/159224'),
          ],
        ),
        t(
          'pubsub',
          'Pub/sub for socket.io',
          `publish_realtime from Python; Redis pub/sub is the broker; Frappe realtime docs are the API.`,
          [
            r('docs', 'Redis pub/sub', 'https://redis.io/docs/latest/develop/pubsub/'),
            r('official', 'Realtime (socket.io)', `${FW}/user/en/api/realtime`),
          ],
        ),
      ],
    },
  ],
}

export const jinjaAndPrint = {
  slug: 'jinja-and-print',
  title: 'Jinja and print',
  type: 'skill',
  version: 'v16',
  order: 15,
  summary: 'Print formats, PDFs, and Print Designer.',
  rows: [
    {
      group: '1. Templates',
      topics: [
        t(
          'jinja',
          'Jinja in print and email',
          `Print formats and emails are Jinja with a document context. Keep tax tables in data, not hardcoded HTML.`,
          [
            r('docs', 'Jinja templates', 'https://jinja.palletsprojects.com/en/stable/templates/'),
            r('official', 'Print format', `${FW}/user/en/print-format`),
          ],
        ),
        t(
          'print-formats',
          'Print Format DocType',
          `Standard vs Jinja vs custom HTML. Test with a submitted document, not a draft missing taxes.`,
          [r('official', 'Print format', `${FW}/user/en/print-format`)],
        ),
      ],
    },
    {
      group: '2. PDF',
      topics: [
        t(
          'wkhtmltopdf',
          'wkhtmltopdf and Chrome PDF',
          `Missing wkhtmltopdf is a common blank-PDF ticket. v16 notes also mention Chrome-based PDF. Keep print CSS simple.`,
          [
            r('official', 'Installation', `${FW}/user/en/installation`),
            r('forum', 'v16 Ubuntu install (wkhtmltopdf)', 'https://discuss.frappe.io/t/guide-how-to-install-erpnext-v16-on-linux-ubuntu-24-04-step-by-step-instructions/159255'),
          ],
        ),
        t(
          'print-designer',
          'Print Designer',
          `Visual layouts as a Frappe app. You still need Jinja for computed rows.`,
          [r('official', 'Print Designer docs', 'https://docs.frappe.io/print-designer')],
        ),
      ],
    },
  ],
}

export const gitAndGithub = {
  slug: 'git-and-github',
  title: 'Git for Frappe apps',
  type: 'skill',
  version: 'v16',
  order: 16,
  summary: 'Git from git-scm.com, plus Frappe contribution rules.',
  rows: [
    {
      group: '1. Git',
      topics: [
        t(
          'git-basics',
          'Commit, diff, stash',
          `Learn status, add, commit, diff from Pro Git. Never commit sites/, env/, or database dumps.`,
          [
            r('docs', 'Git Basics (Pro Git)', 'https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository'),
            r('docs', 'Recording changes', 'https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository'),
          ],
        ),
        t(
          'branching',
          'Branches: version-16 vs develop',
          `Official apps keep version-15, version-16, and develop. Rebase onto the branch you will deploy.`,
          [
            r('docs', 'Git branching', 'https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging'),
            r('official', 'Contribution guidelines', 'https://github.com/frappe/erpnext/wiki/Contribution-Guidelines'),
          ],
        ),
      ],
    },
    {
      group: '2. Reviews',
      topics: [
        t(
          'prs',
          'Pull requests',
          `Small diffs, tests, and a reason. Pre-commit is common on official apps.`,
          [
            r('official', 'Contribution guidelines', 'https://github.com/frappe/erpnext/wiki/Contribution-Guidelines'),
            r('official', 'Issue guidelines', 'https://github.com/frappe/erpnext/wiki/Issue-Guidelines'),
          ],
        ),
      ],
    },
  ],
}

export const linuxNginx = {
  slug: 'linux-nginx-supervisor',
  title: 'Linux, nginx, supervisor',
  type: 'skill',
  version: 'v16',
  order: 17,
  summary: 'OS, reverse proxy, and process manager from Frappe production docs.',
  rows: [
    {
      group: '1. OS',
      topics: [
        t(
          'linux-cli',
          'Linux CLI',
          `chmod 777 on sites/ is a security incident. Current v16 threads target Ubuntu 24.04+ / Debian 13+ because of Python 3.14.`,
          [
            r('official', 'Installation', `${FW}/user/en/installation`),
            r('forum', 'Officially supported distro', 'https://discuss.frappe.io/t/officially-supported-distro-and-guide/163881'),
            r('docs', 'chmod (man)', 'https://man7.org/linux/man-pages/man1/chmod.1.html'),
          ],
        ),
        t(
          'nginx',
          'nginx',
          `bench setup nginx writes config/nginx.conf. Disable the default port-80 site. Reload after every regenerate.`,
          [
            r('official', 'Setup production (nginx)', `${FW}/user/en/bench/guides/setup-production`),
            r('official', 'Bench commands', `${FW}/user/en/bench/bench-commands`),
          ],
        ),
      ],
    },
    {
      group: '2. Process manager',
      topics: [
        t(
          'supervisor',
          'supervisor / systemd',
          `If jobs stall, restart workers, not only nginx. Production docs recommend Docker; supervisor remains documented for bare metal.`,
          [
            r('official', 'Setup production (supervisor)', `${FW}/user/en/bench/guides/setup-production`),
            r('forum', 'Enterprise production setup v16', 'https://discuss.frappe.io/t/enterprise-production-setup-security-erpnext-v16-ubuntu-25/159224'),
          ],
        ),
        t(
          'ssl',
          'TLS',
          `lets-encrypt or your load balancer. host_name must match the certificate.`,
          [
            r('official', 'Bench commands (lets-encrypt)', `${FW}/user/en/bench/bench-commands`),
            r('official', 'Setup production', `${FW}/user/en/bench/guides/setup-production`),
          ],
        ),
      ],
    },
  ],
}

export const dockerAndCloud = {
  slug: 'docker-and-frappe-cloud',
  title: 'Docker and Frappe Cloud',
  type: 'skill',
  version: 'v16',
  order: 18,
  summary: 'Containers, frappe_docker, and managed hosting.',
  rows: [
    {
      group: '1. Containers',
      topics: [
        t(
          'docker',
          'Docker and Compose',
          `Persist MariaDB and sites/ or you lose data on recreate. Learn Compose from Docker docs before copying a random gist.`,
          [
            r('docs', 'Docker get started', 'https://docs.docker.com/get-started/'),
            r('docs', 'Docker Compose', 'https://docs.docker.com/compose/'),
            r('official', 'Setup production (Docker recommended)', `${FW}/user/en/bench/guides/setup-production`),
          ],
        ),
        t(
          'frappe-docker',
          'frappe_docker',
          `Pin version-16 in image build args. Start from getting-started, then forum v16 Docker notes.`,
          [
            r('docs', 'frappe_docker getting started', 'https://github.com/frappe/frappe_docker/blob/main/docs/getting-started.md'),
            r('forum', 'ERPNext v16 on Docker', 'https://discuss.frappe.io/t/tutorial-docker-installing-erpnext-16-on-docker-a-step-by-step-guide-production/160885'),
          ],
        ),
      ],
    },
    {
      group: '2. Hosted',
      topics: [
        t(
          'easy-install',
          'easy-install.py',
          `Documented for Helpdesk and similar. You still need bench to debug a failed migrate.`,
          [
            r('official', 'Helpdesk first steps', `${HD}/your-first-steps-with-frappe-helpdesk`),
            r('official', 'Bench commands', `${FW}/user/en/bench/bench-commands`),
          ],
        ),
        t(
          'frappe-cloud',
          'Frappe Cloud',
          `Managed sites, marketplace apps, backups. Use it to see a healthy v16 site even if you later self-host.`,
          [
            r('official', 'Frappe Cloud', 'https://frappe.io/cloud'),
            r('official', 'Frappe Cloud product', 'https://frappecloud.com'),
          ],
        ),
      ],
    },
  ],
}
