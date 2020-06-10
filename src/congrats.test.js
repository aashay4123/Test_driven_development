import React from "react";
import Enzyme, { Shallow, configure } from "enzyme";
import EnzymeAdaptar from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

configure({ adapter: new EnzymeAdaptar() });
