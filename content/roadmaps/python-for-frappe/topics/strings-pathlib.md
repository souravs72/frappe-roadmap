# Strings and pathlib

Use f-strings for logs and frappe.msgprint. For files, prefer pathlib.Path over string concatenation.

Site files live under sites/<site>/. Never hardcode /home/frappe/.... Join with Path so backups resolve on any host.

## Learn

- @docs@ Input and output | https://docs.python.org/3.14/tutorial/inputoutput.html
- @docs@ pathlib | https://docs.python.org/3.14/library/pathlib.html
- @docs@ json | https://docs.python.org/3.14/library/json.html
