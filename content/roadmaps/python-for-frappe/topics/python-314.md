# CPython 3.14 for v16

Frappe version-16 declares requires-python >=3.14,<3.15 in pyproject.toml. A 3.10 or 3.12 interpreter fails at install. Confirm with python3 --version before bench init.

Community threads match the wiki: use CPython 3.14.x, then rebuild env/ so frappe-bench/env/bin/python is 3.14.

Node also moved: v16 expects Node 24 for asset builds. Treat Python and Node as a pair when you upgrade a bench.

## Learn

- @official@ Migrating to version 16 (Python and Node floors) | https://github.com/frappe/frappe/wiki/Migrating-to-version-16
- @forum@ Which Python version for ERPNext v16 | https://discuss.frappe.io/t/which-version-of-python-needed-for-erpnext-v16/158527
- @forum@ Frappe and Python 3.14 | https://discuss.frappe.io/t/frappe-and-python-3-14/159316
- @docs@ Python 3.14 tutorial | https://docs.python.org/3.14/tutorial/index.html
