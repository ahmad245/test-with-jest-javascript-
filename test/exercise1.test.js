const exercise = require("../exercise1");
describe("fizzBuzz", () => {
  test("should throw un execption if input not a number", () => {
    const args = [null, undefined, "a", {}];
    args.forEach((arg) => {
      expect(() => exercise.fizzBuzz(arg)).toThrow();
    });
  });
  test("should return fizzbuzz if input is divisible by 3 and 5  ", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  test("should return fizz if input is divisible by 3 and not 5  ", () => {
    const result = exercise.fizzBuzz(9);
    expect(result).toBe("Fizz");
  });
  test("should return fizz if input is divisible by 5 and not 3  ", () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });
  test("should return input  if input is not  divisible by 5 or  3  ", () => {
    const result = exercise.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
