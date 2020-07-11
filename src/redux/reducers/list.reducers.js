import { GET_LIST, SET_LIST, APPEND_LIST } from "../types";
const initialState = {
  loading: false,
  data: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_LIST:
      return {
        loading: false,
        data: action.payload,
      };
    case APPEND_LIST:
      return {
        loading: false,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
}
