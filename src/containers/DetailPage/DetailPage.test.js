import React from "react";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import DetailPageContainer from "./DetailPage.container";
import DetailPage from "./DetailPage.component";
import config from "./DetailPage.config";

import { detailPokemon } from "../../constant/fictures";

const mockStore = configureStore([thunk]);
const initialState = {};
const store = mockStore(initialState);

const props = {
  ...config.defaultProps,
  pokemon: {
    data: detailPokemon,
    loading: false,
  },
  route: {
    params: {
      pokemonId: "1",
    },
  },
  getPokemon: jest.fn(() => Promise.resolve()),
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(<DetailPage {...props} />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("DetailPage Snap Test", () => {
  test("should render correctly on finished get", () => {
    expect(shallow(<DetailPageContainer store={store} />)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });

  test("should render correctly on loading", () => {
    wrapper.setProps({
      pokemon: {
        data: detailPokemon,
        loading: true,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
