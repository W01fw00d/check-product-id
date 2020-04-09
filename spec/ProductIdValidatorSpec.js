describe("ProductIdValidator", () => {
  let validator;

  beforeEach(() => {
    validator = new ProductIdValidator();
  });

  it("should return true when argument has correct format", () => {
    expect(
      validator.validate(
        `${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}`
      )
    ).toBeTrue();
  });

  it("should return false when argument is undefined", () => {
    expect(validator.validate()).toBeFalse();
  });

  it("should return false when argument is null", () => {
    expect(validator.validate(null)).toBeFalse();
  });

  it("should return false when argument is empty string", () => {
    expect(validator.validate("")).toBeFalse();
  });

  it("should return false when argument has one hyphen less", () => {
    expect(
      validator.validate(
        `${getRandomFourDigitNumber()}${getRandomFourDigitNumber()}-${getRandomFourDigitNumber()}`
      )
    ).toBeFalse();
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
