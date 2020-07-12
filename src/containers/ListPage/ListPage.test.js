import React from "react";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import ListPageContainer from "./ListPage.container";
import ListPage from "./ListPage.component";
import config from "./ListPage.config";

import { listPokomen } from "../../constant/fictures";

jest.mock("reanimated-bottom-sheet", () => "BottomSheet");

const mockStore = configureStore([thunk]);
const initialState = {};
const store = mockStore(initialState);

const props = {
  ...config.defaultProps,
  pokemons: {
    data: listPokomen,
    loading: false,
  },
  navigation: {
    push: jest.fn(),
  },
  getPokemonList: jest.fn(() => Promise.resolve()),
  getPokemonByType: jest.fn(() => Promise.resolve()),
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

describe("ListPage Unit Test", () => {
  describe("_getPokemonList", () => {
    test("should call getPokemonList correctly on infinite list with selected filter", () => {
      wrapper.setState({ selectedType: "Poison" });
      instance._getPokemonList(false, true)();

      expect(props.getPokemonList).toBeCalled();
    });
  });

  describe("_onClickPokemonItem", () => {
    test("should navigate to pokemon detail with correct url", () => {
      instance._onClickPokemonItem("https://pokeapi.co/api/v2/pokemon/1/")();

      expect(props.navigation.push).toBeCalledWith("Detail", {
        pokemonId: "1",
      });
    });
  });

  describe("_onClickFilterItem", () => {
    test("should call api to get filtered result & close bottom sheet", () => {
      instance.bottomSheetRef = { current: { snapTo: jest.fn() } };

      instance._onClickFilterItem({ id: 4, name: "Poison" })();

      expect(props.getPokemonByType).toBeCalledWith(4);
    });
  });

  describe("_setBottomSheet", () => {
    test("should set bottomSheetOpen state correctly", () => {
      instance._setBottomSheet(true)();

      expect(wrapper.state("bottomSheetOpen")).toEqual(true);
    });
  });
});

describe("ListPage Snap Test", () => {
  test("should render correctly", () => {
    expect(shallow(<ListPageContainer store={store} />)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });

  test("should render item correctly", () => {
    const result = instance.renderItem({
      item: { name: "Bulbasaur", url: "UrlBulbasaur" },
      index: 1,
    });
    expect(result).toMatchSnapshot();
  });

  test("should render bottom sheet header", () => {
    const result = instance.renderBottomSheetHeader();
    expect(result).toMatchSnapshot();
  });

  test("should render bottom sheet header when open", () => {
    wrapper.setState({ bottomSheetOpen: true });

    const result = instance.renderBottomSheetHeader();
    expect(result).toMatchSnapshot();
  });

  test("should render bottom sheet header when filter selected", () => {
    wrapper.setState({ selectedType: "Poison" });

    const result = instance.renderBottomSheetHeader();
    expect(result).toMatchSnapshot();
  });

  test("should render bottom sheet content", () => {
    const result = instance.renderBottomSheetContent();
    expect(result).toMatchSnapshot();
  });
});
