import { combineReducers } from "redux";
import success from "./sucessReducer";
import guessWords from "./guessWordsReducer";

export default combineReducers({
  success,
  guessWords,
});
