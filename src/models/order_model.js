class Order {
  constructor(row) {
    this.id = row.id;
    this.customer_name = row.customer_name;
    this.phone = row.phone;
    this.address = row.address;
    this.note = row.note;
    this.status = row.status;
    this.created_at = row.created_at;
  }
}

module.exports = Order;
