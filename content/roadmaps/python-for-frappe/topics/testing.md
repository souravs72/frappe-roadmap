# unittest and Frappe tests

Python unittest is what Frappe’s runner wraps. Run bench --site <site> run-tests --app your_app.

Tests that write documents must clean up. Assert on docstatus and ledger side effects, not HTML snapshots.

## Learn

- @docs@ unittest | https://docs.python.org/3.14/library/unittest.html
- @official@ Writing tests | https://docs.frappe.io/framework/user/en/testing
- @school@ Frappe School | https://frappe.school
