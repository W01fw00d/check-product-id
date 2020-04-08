describe("ProductIdValidator", () => {
  let validator;

  beforeEach(function () {
    validator = new ProductIdValidator();
  });

  it("should return true when argument with correct format", () => {
    expect(
      validator.validate(
        `${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}`
      )
    ).toBeTrue();
  });

  it("should return false when argument has less than 12 digit", () => {
    expect(
      validator.validate(
        `${getRandomThreeDigitNumber()}-${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}`
      )
    ).toBeFalse();
  });

  it("should return false when argument has any non-digit character", () => {
    expect(
      validator.validate(
        `${getRandomString(
          4
        )}-${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}`
      )
    ).toBeFalse();
  });
});
