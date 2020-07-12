import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import TextValue from "./TextValue.component";
import config from "./TextValue.config";

const props = {
  ...config.defaultProps,
};

let component;
beforeEach(() => {
  component = shallow(<TextValue {...props} />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("TextValue Snap Test", () => {
  test("should render correctly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
