import validator from "../../utilities/validator";
describe("Test request width and height", (): void => {
  it("test with zero value", () => {
    expect(validator.validateNumber("0")).toBeFalse();
  });

  it("test with NaN value", () => {
    expect(validator.validateNumber("test")).toBeFalse();
  });
  it("test with number ", () => {
    expect(validator.validateNumber("53")).toBeTrue();
  });
});
