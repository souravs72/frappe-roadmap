# Classes and Document

A DocType controller subclasses frappe.model.document.Document. Use frappe.get_doc / frappe.new_doc so naming, permissions, and hooks run.

Read Python’s class tutorial, then the Document API, then trace validate → before_save → on_submit in one small controller.

## Learn

- @docs@ Classes | https://docs.python.org/3.14/tutorial/classes.html
- @official@ Document API | https://docs.frappe.io/framework/user/en/api/document
- @official@ Understanding DocTypes | https://docs.frappe.io/framework/user/en/basics/doctypes
