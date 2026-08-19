import { PY, SCHOOL, WIKI16, FW, r, t } from './helpers.mjs'

export const pythonForFrappe = {
  slug: 'python-for-frappe',
  title: 'Python for Frappe',
  type: 'skill',
  version: 'v16',
  order: 10,
  summary:
    'Learn the Python you need for Frappe v16 controllers, hooks, and tests. Lessons are written here; the Learn links go to Python.org, Frappe docs, and the forum.',
  rows: [
    {
      group: '1. Runtime',
      topics: [
        t(
          'python-314',
          'CPython 3.14 for v16',
          `Frappe version-16 declares requires-python >=3.14,<3.15 in pyproject.toml. A 3.10 or 3.12 interpreter fails at install. Confirm with python3 --version before bench init.

Community threads match the wiki: use CPython 3.14.x, then rebuild env/ so frappe-bench/env/bin/python is 3.14.

Node also moved: v16 expects Node 24 for asset builds. Treat Python and Node as a pair when you upgrade a bench.`,
          [
            r('official', 'Migrating to version 16 (Python and Node floors)', WIKI16),
            r('forum', 'Which Python version for ERPNext v16', 'https://discuss.frappe.io/t/which-version-of-python-needed-for-erpnext-v16/158527'),
            r('forum', 'Frappe and Python 3.14', 'https://discuss.frappe.io/t/frappe-and-python-3-14/159316'),
            r('docs', 'Python 3.14 tutorial', `${PY}/tutorial/index.html`),
          ],
        ),
        t(
          'uv-venv',
          'uv, venv, and bench env',
          `A virtual environment is an isolated site-packages tree. Official Python documents this as the venv module. Bench creates frappe-bench/env/ during bench init. Day to day, bench calls that interpreter for you.

v16 install notes on the forum recommend uv to install CPython 3.14. Never pip install Frappe packages into system Python.

If env/bin/python -V is not 3.14, rebuild the env instead of mixing versions.`,
          [
            r('docs', 'venv — virtual environments', `${PY}/library/venv.html`),
            r('official', 'Install and setup bench (env/ layout)', `${FW}/user/en/tutorial/install-and-setup-bench`),
            r('forum', 'ERPNext v16 on Ubuntu 24.04 (uv + Python 3.14)', 'https://discuss.frappe.io/t/guide-how-to-install-erpnext-v16-on-linux-ubuntu-24-04-step-by-step-instructions/159255'),
          ],
        ),
      ],
    },
    {
      group: '2. Language core',
      topics: [
        t(
          'syntax-control',
          'Syntax and control flow',
          `Python uses indentation instead of braces. Learn if/elif/else, for, while, and with. Functions are def name(args): with optional type annotations.

A syntax error in hooks.py or a DocType .py file can stop workers from booting. Compile-check the file after an edit.

Read the language tutorial through Control Flow and Functions before copying forum snippets.`,
          [
            r('docs', 'More control flow tools', `${PY}/tutorial/controlflow.html`),
            r('school', 'Frappe School courses', SCHOOL),
          ],
        ),
        t(
          'collections',
          'Lists, dicts, and sets',
          `Frappe APIs return lists of dicts: frappe.get_all rows, doc.as_dict(), REST JSON. You need indexing, dict.get, unpacking, and comprehensions.

Do not mutate a list you are iterating. When merging filters, copy dicts so you do not leak state across requests.`,
          [
            r('docs', 'Data structures', `${PY}/tutorial/datastructures.html`),
            r('official', 'Database API (get_all rows)', `${FW}/user/en/api/database`),
          ],
        ),
        t(
          'strings-pathlib',
          'Strings and pathlib',
          `Use f-strings for logs and frappe.msgprint. For files, prefer pathlib.Path over string concatenation.

Site files live under sites/<site>/. Never hardcode /home/frappe/.... Join with Path so backups resolve on any host.`,
          [
            r('docs', 'Input and output', `${PY}/tutorial/inputoutput.html`),
            r('docs', 'pathlib', `${PY}/library/pathlib.html`),
            r('docs', 'json', `${PY}/library/json.html`),
          ],
        ),
        t(
          'decimal-datetime',
          'Decimal, dates, and money',
          `ERPNext money is not a float. Floats cannot represent 0.1 exactly. Use decimal.Decimal (and ERPNext currency helpers) for amounts.

datetime.date / datetime.datetime appear on transactional DocTypes. Do not invent a second clock in custom code.`,
          [
            r('docs', 'decimal', `${PY}/library/decimal.html`),
            r('docs', 'datetime', `${PY}/library/datetime.html`),
            r('official', 'Document API', `${FW}/user/en/api/document`),
          ],
        ),
      ],
    },
    {
      group: '3. Types and objects',
      topics: [
        t(
          'typing',
          'Type hints',
          `Annotations help editors and readers. Frappe core on v16 uses them widely. Learn list[str], X | None, and stop there until a whitelist payload is stable.

Keep runtime behaviour in validate() and tests, not in the type checker.`,
          [
            r('docs', 'typing module', `${PY}/library/typing.html`),
            r('official', 'Python API', `${FW}/user/en/api/python`),
          ],
        ),
        t(
          'oop',
          'Classes and Document',
          `A DocType controller subclasses frappe.model.document.Document. Use frappe.get_doc / frappe.new_doc so naming, permissions, and hooks run.

Read Python’s class tutorial, then the Document API, then trace validate → before_save → on_submit in one small controller.`,
          [
            r('docs', 'Classes', `${PY}/tutorial/classes.html`),
            r('official', 'Document API', `${FW}/user/en/api/document`),
            r('official', 'Understanding DocTypes', `${FW}/user/en/basics/doctypes`),
          ],
        ),
        t(
          'exceptions',
          'Exceptions and frappe.throw',
          `User-visible business errors should go through frappe.throw so Desk shows a message. Bare except: in a hook swallows bugs.

Log with frappe.log_error for operators; do not print to stdout in production workers.`,
          [
            r('docs', 'Errors and exceptions', `${PY}/tutorial/errors.html`),
            r('official', 'Python API', `${FW}/user/en/api/python`),
          ],
        ),
      ],
    },
    {
      group: '4. Tests',
      topics: [
        t(
          'testing',
          'unittest and Frappe tests',
          `Python unittest is what Frappe’s runner wraps. Run bench --site <site> run-tests --app your_app.

Tests that write documents must clean up. Assert on docstatus and ledger side effects, not HTML snapshots.`,
          [
            r('docs', 'unittest', `${PY}/library/unittest.html`),
            r('official', 'Writing tests', `${FW}/user/en/testing`),
            r('school', 'Frappe School', SCHOOL),
          ],
        ),
      ],
    },
  ],
}
