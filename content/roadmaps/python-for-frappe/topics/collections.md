# Lists, dicts, and sets

Frappe APIs return lists of dicts: frappe.get_all rows, doc.as_dict(), REST JSON. You need indexing, dict.get, unpacking, and comprehensions.

Do not mutate a list you are iterating. When merging filters, copy dicts so you do not leak state across requests.

## Learn

- @docs@ Data structures | https://docs.python.org/3.14/tutorial/datastructures.html
- @official@ Database API (get_all rows) | https://docs.frappe.io/framework/user/en/api/database
