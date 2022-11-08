/* exported Transaction */
function Transaction(type, amount) {
  this.amount = Math.round(Math.abs(amount));
  if (type === 'deposit' || type === 'withdrawal') {
    this.type = type;
  }
}
