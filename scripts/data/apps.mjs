import { EN, FW, HD, HR, LMS, SCHOOL, WIKI16, r, t } from './helpers.mjs'

export const frappeDeveloper = {
  slug: 'frappe-developer',
  title: 'Frappe Developer',
  type: 'role',
  version: 'v16',
  order: 1,
  summary:
    'Follow the numbered skill maps in order, then Bench, Framework, and the official apps. Each node opens a lesson on this site.',
  rows: [
    {
      group: '1. Foundations',
      topics: [
        t(
          'git-linux',
          'Git and Linux',
          `You will live in a terminal and a git history. Complete the Git map and the Linux/nginx map next. Do not skip permissions on sites/.`,
          [
            r('internal', 'Git for Frappe apps', '#/r/git-and-github'),
            r('internal', 'Linux, nginx, supervisor', '#/r/linux-nginx-supervisor'),
            r('official', 'Frappe installation', `${FW}/user/en/installation`),
          ],
        ),
        t(
          'python',
          'Python for Frappe',
          `v16 needs CPython 3.14. Controllers, hooks, and tests are Python. Open the Python map and work top to bottom.`,
          [
            r('internal', 'Python for Frappe map', '#/r/python-for-frappe'),
            r('official', 'Migrating to version 16', WIKI16),
          ],
        ),
        t(
          'javascript-vue',
          'JavaScript and Vue',
          `Desk client scripts are JavaScript. Helpdesk/HRMS/LMS portals are Vue 3 + Frappe UI. Do both skill maps.`,
          [
            r('internal', 'JavaScript for Frappe', '#/r/javascript-for-frappe'),
            r('internal', 'Vue and Frappe UI', '#/r/vue-and-frappe-ui'),
          ],
        ),
      ],
    },
    {
      group: '2. Data and runtime',
      topics: [
        t(
          'sql',
          'SQL: MariaDB and PostgreSQL',
          `Every DocType is a table. Learn frappe.db and enough SQL to read a query report.`,
          [
            r('internal', 'SQL for Frappe', '#/r/sql-mariadb-postgresql'),
            r('official', 'Database API', `${FW}/user/en/api/database`),
          ],
        ),
        t(
          'redis',
          'Redis',
          `Cache, RQ, and realtime all go through Redis processes bench starts.`,
          [
            r('internal', 'Redis for Frappe', '#/r/redis-for-frappe'),
            r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`),
          ],
        ),
      ],
    },
    {
      group: '3. Frappe core',
      topics: [
        t(
          'bench',
          'Bench',
          `CLI that creates sites, installs apps, and writes nginx/supervisor config.`,
          [
            r('internal', 'Frappe Bench map', '#/r/frappe-bench'),
            r('official', 'Install and setup bench', `${FW}/user/en/tutorial/install-and-setup-bench`),
          ],
        ),
        t(
          'framework',
          'Frappe Framework',
          `DocTypes, ORM, hooks (extend_doctype_class on v16), Desk, REST, permissions, jobs, tests.`,
          [
            r('internal', 'Frappe Framework map', '#/r/frappe-framework'),
            r('official', 'Framework introduction', `${FW}/user/en/introduction`),
          ],
        ),
      ],
    },
    {
      group: '4. Official apps',
      topics: [
        t(
          'erpnext',
          'ERPNext',
          `Accounting, stock, selling, buying, manufacturing. Learn ledgers, then customize.`,
          [
            r('internal', 'ERPNext map', '#/r/erpnext'),
            r('official', 'ERPNext introduction', `${EN}/introduction`),
          ],
        ),
        t(
          'hrms-lms-helpdesk',
          'HRMS, LMS, Helpdesk',
          `Separate apps with Vue frontends. Install on a v16 bench after Framework.`,
          [
            r('internal', 'Frappe HR', '#/r/hrms'),
            r('internal', 'Frappe LMS', '#/r/lms'),
            r('internal', 'Frappe Helpdesk', '#/r/helpdesk'),
          ],
        ),
      ],
    },
    {
      group: '5. Ship it',
      topics: [
        t(
          'print-jinja',
          'Jinja and print',
          `Print formats and PDFs. Complete the print map before a customer invoice goes to production.`,
          [
            r('internal', 'Jinja and print', '#/r/jinja-and-print'),
            r('official', 'Print format', `${FW}/user/en/print-format`),
          ],
        ),
        t(
          'devops',
          'Production and Docker',
          `nginx, supervisor, backups, Frappe Cloud, Docker. A developer who cannot restore a site is not done.`,
          [
            r('internal', 'Linux, nginx, supervisor', '#/r/linux-nginx-supervisor'),
            r('internal', 'Docker and Frappe Cloud', '#/r/docker-and-frappe-cloud'),
            r('school', 'Frappe School', SCHOOL),
          ],
        ),
      ],
    },
  ],
}

export const frappeBench = {
  slug: 'frappe-bench',
  title: 'Frappe Bench',
  type: 'app',
  version: 'v16',
  order: 20,
  summary: 'CLI, sites, apps, workers, and production layout.',
  rows: [
    {
      group: '1. Concepts',
      topics: [
        t(
          'what-is-bench',
          'What bench is',
          `A CLI plus a directory: apps/, sites/, env/, config/. It orchestrates the Framework; it is not the Framework.`,
          [
            r('official', 'Install and setup bench', `${FW}/user/en/tutorial/install-and-setup-bench`),
            r('official', 'Bench commands', `${FW}/user/en/bench/bench-commands`),
          ],
        ),
        t(
          'install-develop',
          'Development install',
          `Prereqs, bench init with --frappe-branch version-16, new-site. Match Python 3.14 and Node 24.`,
          [
            r('official', 'Installation', `${FW}/user/en/installation`),
            r('official', 'Migrating to version 16', WIKI16),
            r('forum', 'v16 Ubuntu 24.04 install guide', 'https://discuss.frappe.io/t/guide-how-to-install-erpnext-v16-on-linux-ubuntu-24-04-step-by-step-instructions/159255'),
          ],
        ),
      ],
    },
    {
      group: '2. Sites and apps',
      topics: [
        t(
          'sites',
          'Sites',
          `A site is a database plus site_config.json. Multi-site benches share apps and env.`,
          [r('official', 'Install and setup bench', `${FW}/user/en/tutorial/install-and-setup-bench`)],
        ),
        t(
          'apps',
          'get-app and install-app',
          `get-app clones into apps/. install-app runs migrations on a site. Install erpnext before apps that depend on it.`,
          [r('official', 'Bench commands', `${FW}/user/en/bench/bench-commands`)],
        ),
        t(
          'developer-mode',
          'developer_mode',
          `Required to create DocTypes from Desk. Never leave it on in production.`,
          [r('official', 'Create a DocType', `${FW}/user/en/tutorial/create-a-doctype`)],
        ),
      ],
    },
    {
      group: '3. Processes',
      topics: [
        t(
          'bench-start',
          'bench start',
          `Procfile: web, workers, redis, socketio, watch. This is development, not production.`,
          [r('official', 'Install and setup bench', `${FW}/user/en/tutorial/install-and-setup-bench`)],
        ),
        t(
          'workers',
          'Workers and scheduler',
          `bench worker and bench schedule. Cron lives in hooks.py.`,
          [r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`)],
        ),
        t(
          'migrate-backup',
          'migrate and backup',
          `bench --site x migrate after pulls. Backup before migrate on production.`,
          [
            r('official', 'Bench commands', `${FW}/user/en/bench/bench-commands`),
            r('official', 'Database migrations', `${FW}/user/en/database-migrations`),
          ],
        ),
      ],
    },
    {
      group: '4. Production',
      topics: [
        t(
          'nginx-supervisor',
          'nginx and supervisor',
          `sudo bench setup production, or manual setup nginx / setup supervisor. Docker is the documented recommended production path.`,
          [
            r('official', 'Setup production', `${FW}/user/en/bench/guides/setup-production`),
            r('forum', 'Enterprise production setup v16', 'https://discuss.frappe.io/t/enterprise-production-setup-security-erpnext-v16-ubuntu-25/159224'),
          ],
        ),
        t(
          'bench-commands',
          'Everyday commands',
          `console, mariadb, build, clear-cache, enable-scheduler. Read the cheatsheet before inventing shell loops.`,
          [
            r('official', 'Bench commands', `${FW}/user/en/bench/bench-commands`),
            r('official', 'Commands cheatsheet', `${FW}/user/en/bench/resources/bench-commands-cheatsheet`),
          ],
        ),
      ],
    },
  ],
}

export const frappeFramework = {
  slug: 'frappe-framework',
  title: 'Frappe Framework',
  type: 'app',
  version: 'v16',
  order: 21,
  summary: 'DocTypes, ORM, hooks, Desk, REST, permissions, jobs, and v16 changes.',
  rows: [
    {
      group: '1. Model',
      topics: [
        t('architecture', 'Architecture', `Request hits gunicorn, site context, Document API, MariaDB/Postgres, Redis. Desk is a SPA on /desk in v16.`, [r('official', 'Introduction', `${FW}/user/en/introduction`), r('official', 'Migrating to version 16', WIKI16)]),
        t('doctypes', 'DocTypes', `JSON metadata plus a SQL table plus optional controller. This is the unit of Frappe.`, [r('official', 'DocTypes', `${FW}/user/en/basics/doctypes`)]),
        t('fields-naming', 'Fields and naming', `Fieldtypes, Link, Table, naming series vs autoname. Naming is the primary key.`, [r('official', 'DocTypes', `${FW}/user/en/basics/doctypes`)]),
        t('document-lifecycle', 'Document lifecycle', `validate, before_save, on_submit, on_cancel, on_trash. Submittable DocTypes have docstatus.`, [r('official', 'Document API', `${FW}/user/en/api/document`), r('official', 'docstatus', `${FW}/doctypes/docstatus`)]),
      ],
    },
    {
      group: '2. Python',
      topics: [
        t('controllers', 'Controllers', `your_app/doctype/x/x.py. Keep side effects out of validate when a job can do them.`, [r('official', 'Document API', `${FW}/user/en/api/document`)]),
        t('orm', 'ORM and frappe.db', `get_doc, new_doc, db.get_all. Use qb for joins; avoid string SQL.`, [r('official', 'Database API', `${FW}/user/en/api/database`)]),
        t('hooks', 'hooks.py', `doc_events, scheduler, fixtures. v16 prefers extend_doctype_class over override_doctype_class.`, [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`)]),
        t('extend-doctype-class', 'extend_doctype_class', `Compose extra methods without replacing the whole class.`, [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`), r('official', 'Migrating to version 16', WIKI16)]),
      ],
    },
    {
      group: '3. Security',
      topics: [
        t('permissions', 'Users and permissions', `Roles, user permissions, field-level. Test as a non-Administrator.`, [r('official', 'Users and permissions', `${FW}/user/en/basics/users-and-permissions`)]),
        t('permission-types', 'Custom permission types (v16)', `v16 adds permission types beyond the built-in set.`, [r('official', 'Permission types', `${FW}/permission-types`)]),
        t('whitelist', 'whitelisted methods', `Only @frappe.whitelist() is callable from the client. Guest methods need guest=True and careful authz.`, [r('official', 'REST', `${FW}/user/en/api/rest`)]),
      ],
    },
    {
      group: '4. UI',
      topics: [
        t('desk', 'Desk', `Workspaces, list, form. Path is /desk on v16. Do not hardcode /desk/desk.`, [r('official', 'Desk', `${FW}/user/en/basics/desk`), r('official', 'Migrating to version 16', WIKI16)]),
        t('form-list-js', 'Form and list JS', `Client scripts, custom buttons, formatters.`, [r('official', 'Client scripts', `${FW}/user/en/guides/client-scripts`)]),
        t('website', 'Website', `Web pages, web forms, portal. Separate from Desk.`, [r('official', 'Website', `${FW}/user/en/basics/website`)]),
        t('boot', 'bootinfo', `What the browser receives at login. Do not dump secrets into boot.`, [r('official', 'Python API', `${FW}/user/en/api/python`)]),
      ],
    },
    {
      group: '5. APIs and jobs',
      topics: [
        t('rest', 'REST and RPC', `Token auth, /api/resource, /api/method.`, [r('official', 'REST', `${FW}/user/en/api/rest`)]),
        t('background-jobs', 'Background jobs', `enqueue, queues, cron in hooks.`, [r('official', 'Background jobs', `${FW}/user/en/api/background_jobs`)]),
        t('realtime', 'Realtime', `socket.io + Redis. publish_realtime for live lists.`, [r('official', 'Realtime', `${FW}/user/en/api/realtime`)]),
        t('oauth', 'OAuth2', `Social login and API clients.`, [r('official', 'OAuth2', `${FW}/oauth2`)]),
      ],
    },
    {
      group: '6. Ship quality',
      topics: [
        t('translations', 'Translations', `Extract strings and language files.`, [r('official', 'Translations', `${FW}/user/en/translations`)]),
        t('testing', 'Testing', `Unit and integration tests with a test site.`, [r('official', 'Testing', `${FW}/user/en/testing`)]),
        t('fixtures-patches', 'Fixtures and patches', `Export config as fixtures. Schema changes go in patches.txt.`, [r('official', 'Patches', `${FW}/user/en/database-migrations`)]),
        t('virtual-doctypes', 'Virtual DocTypes', `No table; controller supplies data.`, [r('official', 'DocTypes', `${FW}/user/en/basics/doctypes`)]),
        t('reports', 'Reports', `Query, script, and report builder.`, [r('official', 'Reports', `${FW}/user/en/desk/reports`)]),
        t('v16-migration', 'v16 migration', `Python/Node floors, /desk, hook commit rules, permission types.`, [r('official', 'Migrating to version 16', WIKI16)]),
      ],
    },
  ],
}

export const erpnext = {
  slug: 'erpnext',
  title: 'ERPNext',
  type: 'app',
  version: 'v16',
  order: 30,
  summary: 'Modules, ledgers, and customization from ERPNext docs.',
  rows: [
    {
      group: '1. Orientation',
      topics: [
        t('what-is-erpnext', 'What ERPNext is', `A Frappe app for accounting, stock, selling, buying, manufacturing. Customize via a custom app, not core edits.`, [r('official', 'ERPNext introduction', `${EN}/introduction`)]),
        t('modules-moved-out', 'Modules that left core', `HR, LMS, Helpdesk and others are sibling apps. Do not look for Payroll inside erpnext the way v13 did.`, [r('official', 'Frappe HR', `${HR}/introduction`), r('official', 'Migrating to version 16', WIKI16)]),
      ],
    },
    {
      group: '2. Ledgers',
      topics: [
        t('accounting', 'Accounting / GL', `Chart of accounts, Journal Entry, GL Entry. Never insert GL Entry by hand.`, [r('official', 'Accounting entries', `${EN}/accounting-entries`), r('official', 'Accounting of inventory stock', `${EN}/accounting-of-inventory-stock`)]),
        t('stock', 'Stock ledger', `SLE, warehouses, valuation. Stock and accounts meet at delivery and reconciliation.`, [r('official', 'Stock module', `${EN}/stock`), r('official', 'Accounting of inventory stock', `${EN}/accounting-of-inventory-stock`)]),
      ],
    },
    {
      group: '3. Flows',
      topics: [
        t('selling', 'Selling', `Quotation → Sales Order → Delivery Note → Sales Invoice. Learn the cycle before automating.`, [r('official', 'Selling module', `${EN}/selling`)]),
        t('buying', 'Buying', `Supplier, Purchase Order, Purchase Receipt, Purchase Invoice.`, [r('official', 'Buying module', `${EN}/buying`)]),
        t('manufacturing', 'Manufacturing', `BOM, Work Order, job cards, subcontracting.`, [r('official', 'Manufacturing', `${EN}/manufacturing`)]),
        t('crm', 'CRM', `Lead and Opportunity in ERPNext. Some sites also run the separate Frappe CRM app — know which you are on.`, [r('official', 'ERPNext Lead', `${EN}/lead`), r('official', 'Frappe CRM Lead', 'https://docs.frappe.io/crm/lead')]),
      ],
    },
    {
      group: '4. More modules',
      topics: [
        t('projects', 'Projects', `Project, Task, timesheets. Link to sales and costing.`, [r('official', 'Project overview', `${EN}/projects-introduction`)]),
        t('assets', 'Assets', `Asset, depreciation, movement.`, [r('official', 'Assets overview', `${EN}/assets/introduction`), r('official', 'Asset DocType', `${EN}/asset`)]),
        t('quality', 'Quality', `Quality inspection and procedures.`, [r('official', 'Quality Action', `${EN}/quality_action`)]),
        t('website-ecom', 'Website and e-commerce', `Item website and shopping cart. Portal is the Website, not Desk.`, [r('official', 'Website settings', `${EN}/website-settings`), r('official', 'Shopping cart', `${EN}/shopping-cart`)]),
      ],
    },
    {
      group: '5. Customization',
      topics: [
        t('customization', 'Customize Form', `Prefer Custom Field and Property Setter over forking DocType JSON.`, [r('official', 'Customize Form', `${EN}/customize-form`), r('official', 'Custom Field', `${EN}/custom-field`)]),
        t('overrides', 'Hooks and class extensions', `doc_events and extend_doctype_class. Keep ERPNext importable.`, [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`)]),
        t('regional', 'Regional', `Tax templates and country modules. Do not hardcode one country GST into a global app.`, [r('official', 'ERPNext introduction', `${EN}/introduction`)]),
        t('integrations', 'Integrations', `Payments and connectors. Store secrets in site_config, not in code.`, [r('official', 'OAuth2', `${FW}/oauth2`)]),
      ],
    },
  ],
}

export const hrms = {
  slug: 'hrms',
  title: 'Frappe HR (HRMS)',
  type: 'app',
  version: 'v16',
  order: 31,
  summary: 'Employee lifecycle, leave, payroll, and the HR frontend.',
  rows: [
    {
      group: '1. Setup',
      topics: [
        t('install-hrms', 'Install on bench', `get-app hrms, install-app. Payroll talks to ERPNext accounts when that app is present.`, [r('official', 'Frappe HR introduction', `${HR}/introduction`)]),
      ],
    },
    {
      group: '2. Domain',
      topics: [
        t('employee-lifecycle', 'Employee lifecycle', `Employee, onboarding, promotions, exits.`, [r('official', 'Employee', `${HR}/employee`)]),
        t('leave-attendance', 'Leave and attendance', `Leave policy, holidays, check-in, attendance reports.`, [r('official', 'Leaves', `${HR}/leaves`), r('official', 'Employee Attendance Tool', `${HR}/employee-attendance-tool`)]),
        t('expenses', 'Expenses and advances', `Expense claim, advances, workflows, GL posting via ERPNext.`, [r('official', 'Expense Claim', `${HR}/expense-claim`), r('official', 'Employee Advance', `${HR}/employee-advance`)]),
        t('appraisals', 'Performance', `Goals, KRAs, appraisal cycles.`, [r('official', 'Appraisal', `${HR}/appraisal`), r('official', 'Appraisal Cycle', `${HR}/appraisal-cycle`)]),
        t('payroll', 'Payroll and tax', `Salary structure, tax slabs, salary slip. Test on a copy site.`, [r('official', 'Payroll setup', `${HR}/payroll-setup`), r('official', 'Payroll Entry', `${HR}/payroll-entry`)]),
      ],
    },
    {
      group: '3. Product',
      topics: [
        t('pwa', 'Mobile / PWA', `Leaves and check-in on the mobile app. Built with Frappe UI.`, [r('official', 'Frappe HR', `${HR}/introduction`), r('official', 'Frappe UI', 'https://frappe.io/frappe-ui')]),
        t('customize-hrms', 'Customization', `Custom fields on Employee, workflow on claims. Prefer hooks over editing HR controllers.`, [r('official', 'Hooks', `${FW}/user/en/python-api/hooks`)]),
      ],
    },
  ],
}

export const lms = {
  slug: 'lms',
  title: 'Frappe LMS',
  type: 'app',
  version: 'v16',
  order: 32,
  summary: 'Courses, batches, live class, and assessments.',
  rows: [
    {
      group: '1. Setup',
      topics: [
        t('install-lms', 'Install', `bench get-app lms and install-app. Confirm the branch that tracks Frappe v16.`, [r('official', 'Learning introduction', `${LMS}/introduction`)]),
      ],
    },
    {
      group: '2. Domain',
      topics: [
        t('courses', 'Courses', `Course, chapters, lessons as DocTypes.`, [r('official', 'Add a lesson', `${LMS}/course-creation/adding-a-lesson/adding-simple-content`)]),
        t('batches', 'Batches', `Cohorts, enrollment, scheduling.`, [r('official', 'Navigating the Learning portal', `${LMS}/basic-settings/navigating-learning-portal`)]),
        t('live-class', 'Live class', `Live sessions via Zoom or Google Meet from a batch.`, [r('official', 'Create a live class', `${LMS}/create-a-live-class`)]),
        t('assessments', 'Assessments', `Quizzes and assignments stored on LMS DocTypes.`, [r('official', 'Quizzes', `${LMS}/quizzes`), r('official', 'Assignments', `${LMS}/assignments`)]),
      ],
    },
    {
      group: '3. Build',
      topics: [
        t('lms-frontend', 'Frontend', `Modern UI on Frappe. Extend; do not fork lightly.`, [r('official', 'Learning introduction', `${LMS}/introduction`), r('official', 'Frappe UI', 'https://frappe.io/frappe-ui')]),
      ],
    },
  ],
}

export const helpdesk = {
  slug: 'helpdesk',
  title: 'Frappe Helpdesk',
  type: 'app',
  version: 'v16',
  order: 33,
  summary: 'Agent and customer portals, SLA, KB, Vue desk.',
  rows: [
    {
      group: '1. Setup',
      topics: [
        t('install-helpdesk', 'Install', `get-app helpdesk --branch main for v15/v16. Telephony is a separate app if you need calls.`, [r('official', 'Your first steps with Helpdesk', `${HD}/your-first-steps-with-frappe-helpdesk`)]),
      ],
    },
    {
      group: '2. Product',
      topics: [
        t('agent-portal', 'Agent portal', `Ticket list, assignment, saved replies.`, [r('official', 'Ticket', `${HD}/ticket`), r('official', 'Agents and teams', `${HD}/lesson-3-agents-teams`)]),
        t('customer-portal', 'Customer portal', `Issue submission and KB search for customers.`, [r('official', 'Your first steps with Helpdesk', `${HD}/your-first-steps-with-frappe-helpdesk`)]),
        t('sla', 'SLA', `Response and resolution clocks plus scheduler.`, [r('official', 'Service Level Agreement', `${HD}/service-level-agreement`)]),
        t('assignment', 'Assignment rules', `Auto-assign by priority, type, or workload.`, [r('official', 'Agents and teams', `${HD}/lesson-3-agents-teams`), r('official', 'Framework assignments and ToDos', `${FW}/assignments-and-todos`)]),
        t('kb', 'Knowledge base', `Articles that deflect tickets.`, [r('official', 'Knowledge Base', `${HD}/knowledge-base`), r('official', 'Knowledge Base lesson', `${HD}/lesson-4-knowledge-base`)]),
      ],
    },
    {
      group: '3. Platform',
      topics: [
        t('helpdesk-ui', 'Frappe UI SPA', `Frontend dev via the Helpdesk install docs; production assets via bench build --app helpdesk.`, [r('official', 'Your first steps with Helpdesk', `${HD}/your-first-steps-with-frappe-helpdesk`), r('official', 'Frappe UI', 'https://frappe.io/frappe-ui')]),
        t('helpdesk-realtime', 'Realtime tickets', `Live updates use Frappe realtime. Do not poll the ticket list.`, [r('official', 'Realtime', `${FW}/user/en/api/realtime`), r('official', 'Ticket view', `${HD}/lesson-2understanding-ticket-view`)]),
      ],
    },
  ],
}
