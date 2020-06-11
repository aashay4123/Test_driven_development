import { combineReducers } from "redux";
import success from "./sucessReducer";
import guessWords from "./guessWordsReducer";
import secretWord from "./secretWordReducer";

export default combineReducers({
  success,
  guessWords,
  secretWord,
});
