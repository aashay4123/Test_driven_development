import React from "react";
import { shallow } from "enzyme";

import { FindByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "./Input";

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
    test("should render component without error ", () => {});
    test("should not render input box", () => {});
    test("should not render submit button", () => {});
  });
});

describe("update State", () => {
  test("should test the innitial value", () => {});
});
