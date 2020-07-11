import { GET_DETAIL, SET_DETAIL } from "../types";
const initialState = {
  loading: false,
  data: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case SET_DETAIL:
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
