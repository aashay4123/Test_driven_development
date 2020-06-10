import { getLetterMatchCount } from "./index";
import { FindByTestAttr, checkProps } from "../../test/testUtils";

describe("getLetterMatchCount", () => {
  const secret = "partyy";
  test("should return correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("hello", secret);
    expect(letterMatchCount).toBe(0);
  });
  test("should return correct count when there are 3 matching letters", () => {
    const letterMatchCount = getLetterMatchCount("pat", secret);
    expect(letterMatchCount).toBe(3);
  });
  test("should return correct count when there are duplicate letters", () => {
    const letterMatchCount = getLetterMatchCount("ayy", secret);
    expect(letterMatchCount).toBe(3);
  });
  test("should have correct word tested", () => {
    const letterMatchCount = getLetterMatchCount("partyy", secret);
    expect(letterMatchCount).toBe(6);
  });
});
