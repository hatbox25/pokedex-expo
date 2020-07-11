import React from "react";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import ListPageContainer from "./ListPage.container";
import ListPage from "./ListPage.component";
import config from "./ListPage.config";

jest.mock("components", () => ({
  Button: () => "Button",
}));

const mockStore = configureStore([thunk]);
const initialState = {};
const store = mockStore(initialState);

const props = {
  ...config.defaultProps,
};

let wrapper;
let instance;
beforeEach(() => {
  wrapper = shallow(<ListPage {...props} />);
  instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("ListPage Snap Test", () => {
  test("should render correctly", () => {
    expect(shallow(<ListPageContainer store={store} />)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
});
