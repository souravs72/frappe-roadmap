# uv, venv, and bench env

A virtual environment is an isolated site-packages tree. Official Python documents this as the venv module. Bench creates frappe-bench/env/ during bench init. Day to day, bench calls that interpreter for you.

v16 install notes on the forum recommend uv to install CPython 3.14. Never pip install Frappe packages into system Python.

If env/bin/python -V is not 3.14, rebuild the env instead of mixing versions.

## Learn

- @docs@ venv — virtual environments | https://docs.python.org/3.14/library/venv.html
- @official@ Install and setup bench (env/ layout) | https://docs.frappe.io/framework/user/en/tutorial/install-and-setup-bench
- @forum@ ERPNext v16 on Ubuntu 24.04 (uv + Python 3.14) | https://discuss.frappe.io/t/guide-how-to-install-erpnext-v16-on-linux-ubuntu-24-04-step-by-step-instructions/159255
