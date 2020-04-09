function ProductIdValidator() {}
ProductIdValidator.prototype.validate = (input) =>
  /\d{4}-\d{4}-\d{4}/.test(input);
