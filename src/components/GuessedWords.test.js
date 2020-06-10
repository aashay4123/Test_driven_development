import React from "react";
import { shallow } from "enzyme";
import { FindByTestAttr, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 5,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("should not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if no word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("should render without error", () => {
    const component = FindByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("should guess a word", () => {
    const instruction = FindByTestAttr(wrapper, "guess-instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if words are guessed", () => {});
