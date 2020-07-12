import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import pokedexAPIService from "../../services/api.service";
import { listPokomen, typeListPokemon } from "../../constant/fictures";
import { getPokemonList, getPokemonByType } from "./list.action";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
const dispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("getPokemonList", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test("getPokemonList with correct response", (done) => {
    const mockValue = {
      data: { results: listPokomen },
      status: 200,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockValue));

    store.dispatch(getPokemonList()).then((res) => {
      expect(res).toEqual(listPokomen);
      done();
    });
  });

  test("getPokemonList with correct response with unauthorize", (done) => {
    const mockValue = {
      status: 401,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockValue));

    store.dispatch(getPokemonList()).then((res) => {
      expect(res).toEqual("error");
      done();
    });
  });

  test("getPokemonList with correct response with error", (done) => {
    const mockValue = {
      status: 401,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.reject(mockValue));

    store.dispatch(getPokemonList()).then((res) => {
      expect(res).toEqual("error");
      done();
    });
  });
});

describe("getPokemonByType", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test("getPokemonByType with correct response", (done) => {
    const mockValue = {
      data: typeListPokemon,
      status: 200,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockValue));

    store.dispatch(getPokemonByType("4")).then((res) => {
      expect(res).toEqual(typeListPokemon);
      done();
    });
  });

  test("getPokemonByType with correct response with unauthorize", (done) => {
    const mockValue = {
      status: 401,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockValue));

    store.dispatch(getPokemonByType("4")).then((res) => {
      expect(res).toEqual("error");
      done();
    });
  });

  test("getPokemonByType with correct response with error", (done) => {
    const mockValue = {
      status: 401,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.reject(mockValue));

    store.dispatch(getPokemonByType("4")).then((res) => {
      expect(res).toEqual("error");
      done();
    });
  });
});
