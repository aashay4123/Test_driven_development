import React from "react";
import Enzyme, { Shallow, configure, shallow } from "enzyme";
import EnzymeAdaptar from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { FindByTestAttr } from "../test/testUtils";
configure({ adapter: new EnzymeAdaptar() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = FindByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no test when `success` prop is `false`", () => {
  const wrapper = setup({ success: false });
  const component = FindByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("rener non empty congrats message when success prop is true ", () => {
  const wrapper = setup({ success: true });
  const message = FindByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
