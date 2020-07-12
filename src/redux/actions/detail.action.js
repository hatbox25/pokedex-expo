import { GET_DETAIL, SET_DETAIL } from "../types";
import pokedexAPIService from "../../services/api.service";
import get from "lodash.get";

export const onGetFailed = (dispatch) => {
  dispatch({ type: SET_DETAIL, payload: {} });
  return "error";
};

export const getPokemon = (id) => async (dispatch) => {
  dispatch({ type: GET_DETAIL });
  let resolve = null;
  try {
    const response = await pokedexAPIService.get("pokemon/" + id);
    if (response.status === 200) {
      const result = get(response, "data", {});

      dispatch({ type: SET_DETAIL, payload: result });

      resolve = result;
    } else {
      resolve = onGetFailed(dispatch);
    }
  } catch (error) {
    resolve = onGetFailed(dispatch);
  }

  return resolve;
};
