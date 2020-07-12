import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import pokedexAPIService from "../../services/api.service";
import { detailPokemon } from "../../constant/fictures";
import { getPokemon } from "./detail.action";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
const dispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("getPokemon", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test("getPokemon with correct response", (done) => {
    const mockValue = {
      data: detailPokemon,
      status: 200,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockValue));

    store.dispatch(getPokemon("1")).then((res) => {
      expect(res).toEqual(detailPokemon);
      done();
    });
  });

  test("getPokemon with correct response with unauthorize", (done) => {
    const mockValue = {
      status: 401,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockValue));

    store.dispatch(getPokemon("1")).then((res) => {
      expect(res).toEqual("error");
      done();
    });
  });

  test("getPokemon with correct response with error", (done) => {
    const mockValue = {
      status: 401,
    };
    pokedexAPIService.get = jest
      .fn()
      .mockImplementation(() => Promise.reject(mockValue));

    store.dispatch(getPokemon("1")).then((res) => {
      expect(res).toEqual("error");
      done();
    });
  });
});
