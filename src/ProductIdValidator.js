function ProductIdValidator() {}

ProductIdValidator.prototype.validate = (input) => {
  console.log(`Is ${input} valid? ${/\d{4}-\d{4}-\d{4}/.test(input)}`);
  return /\d{4}-\d{4}-\d{4}/.test(input);
};
