import { GET_LIST, SET_LIST, APPEND_LIST } from "../types";
import pokedexAPIService from "../../services/api.service";
import get from "lodash.get";

export const onGetFailed = (dispatch) => {
  dispatch({ type: SET_LIST, payload: [] });
  return "error";
};

export const getPokemonList = (params, isAppend = false) => async (
  dispatch
) => {
  dispatch({ type: GET_LIST });
  let resolve = null;
  try {
    const response = await pokedexAPIService.get("pokemon", { params });
    if (response.status === 200) {
      const result = get(response, "data.results", []);

      dispatch({ type: isAppend ? APPEND_LIST : SET_LIST, payload: result });

      resolve = result;
    } else {
      resolve = onGetFailed(dispatch);
    }
  } catch (error) {
    resolve = onGetFailed(dispatch);
  }

  return resolve;
};

export const getPokemonByType = (type) => async (dispatch) => {
  dispatch({ type: GET_LIST });
  let resolve = null;
  try {
    const response = await pokedexAPIService.get("type/" + type);
    if (response.status === 200) {
      const pokemons = get(response, "data.pokemon", []);

      dispatch({
        type: SET_LIST,
        payload: pokemons.map((pokemon) => pokemon.pokemon),
      });

      resolve = response.data;
    } else {
      resolve = onGetFailed(dispatch);
    }
  } catch (error) {
    resolve = onGetFailed(dispatch);
  }

  return resolve;
};
