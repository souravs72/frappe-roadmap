# Exceptions and frappe.throw

User-visible business errors should go through frappe.throw so Desk shows a message. Bare except: in a hook swallows bugs.

Log with frappe.log_error for operators; do not print to stdout in production workers.

## Learn

- @docs@ Errors and exceptions | https://docs.python.org/3.14/tutorial/errors.html
- @official@ Python API | https://docs.frappe.io/framework/user/en/api/python
