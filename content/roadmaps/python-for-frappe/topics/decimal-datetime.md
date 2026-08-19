# Decimal, dates, and money

ERPNext money is not a float. Floats cannot represent 0.1 exactly. Use decimal.Decimal (and ERPNext currency helpers) for amounts.

datetime.date / datetime.datetime appear on transactional DocTypes. Do not invent a second clock in custom code.

## Learn

- @docs@ decimal | https://docs.python.org/3.14/library/decimal.html
- @docs@ datetime | https://docs.python.org/3.14/library/datetime.html
- @official@ Document API | https://docs.frappe.io/framework/user/en/api/document
