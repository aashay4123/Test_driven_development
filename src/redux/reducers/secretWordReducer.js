import { actionTypes } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORDS:
      return action.payload;
    default:
      return state;
  }
};
