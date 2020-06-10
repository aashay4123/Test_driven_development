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

describe("if words are guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "hello", letterMatchCount: 2 },
    { guessedWord: "agile", letterMatchCount: 5 },
    { guessedWord: "trees", letterMatchCount: 3 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("should render without error", () => {
    const component = FindByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("should render `guessed words` section", () => {
    const guessedWordsNode = FindByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("should have right number of guess words", () => {
    const guessedWordsNode = FindByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });

  test("should ", () => {});
});
