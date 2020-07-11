import React from "react";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import DetailPageContainer from "./DetailPage.container";
import DetailPage from "./DetailPage.component";
import config from "./DetailPage.config";

const mockStore = configureStore([thunk]);
const initialState = {};
const store = mockStore(initialState);

const props = {
  ...config.defaultProps,
};

let wrapper;
let instance;
beforeEach(() => {
  wrapper = shallow(<DetailPage {...props} />);
  instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("DetailPage Unit Test", () => {});

describe("DetailPage Snap Test", () => {
  test("should render correctly", () => {
    expect(shallow(<DetailPageContainer store={store} />)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
});
