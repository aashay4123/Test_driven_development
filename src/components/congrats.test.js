import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { FindByTestAttr, checkProps } from "../../test/testUtils";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup();

  const component = FindByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no test when `success` prop is `false`", () => {
  const wrapper = setup();
  const component = FindByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("rener non empty congrats message when success prop is true ", () => {
  const wrapper = setup({ success: true });
  const message = FindByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("should not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
