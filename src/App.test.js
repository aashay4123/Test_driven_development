import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "../test/testUtils"; // to add state in redux
import App from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux properties", () => {
  test("should have access to `success` state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successprops = wrapper.instance().props.success;
    expect(successprops).toBe(success);
  });
  test("should have access to `secretWord` state", () => {
    const secretWord = "partyy";
    const wrapper = setup({ secretWord });
    const secretWordprops = wrapper.instance().props.secretWord;
    expect(secretWordprops).toBe(secretWord);
  });
  test("should have access to `guessedWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessWords: guessedWords });
    const guessedWordprop = wrapper.instance().props.guessWords;
    expect(guessedWordprop).toEqual(guessedWords);
  });

  test("should have access to `getSecretWord` state", () => {
    const wrapper = setup();
    const getSecretWordprop = wrapper.instance().props.getSecretWords;
    expect(getSecretWordprop).toBeInstanceOf(Function);
  });
});
