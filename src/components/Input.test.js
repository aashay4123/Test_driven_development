import React from "react";
import { shallow } from "enzyme";

import { FindByTestAttr, storeFactory } from "../../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("should render Input component", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("should render component without error ", () => {
      const component = FindByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("should render input box", () => {
      const component = FindByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(1);
    });
    test("should render submit button", () => {
      const component = FindByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("should render component without error ", () => {
      const component = FindByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("should not render input box", () => {
      const component = FindByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(0);
    });
    test("should not render submit button", () => {
      const component = FindByTestAttr(wrapper, "submit-button");
      expect(component.length).toBe(0);
    });
  });
});

describe("Redux Props", () => {
  test("should have success as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("should have `guessWord` as function in props", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord` action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessWord = "train";
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };
    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.setState({ currentGuess: guessWord });
    FindByTestAttr(wrapper, "submit-button").simulate("click", {
      preventDefault() {},
    });
  });
  test("should call guessWord when submit button is clicked", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test("should call `guessWord` with input value as argument", () => {
    console.log(guessWordMock.mock.calls);
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessWord);
  });
});
