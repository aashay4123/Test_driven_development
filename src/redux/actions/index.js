import { getLetterMatchCount } from "../../helpers";
import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORDS: "SET_SECRET_WORDS",
  GET_SECRET_WORDS: "GET_SECRET_WORDS",
};
// export const correctGuess = () => {
//   return {
//     type: actionTypes.CORRECT_GUESS,
//   };
// };

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const LetterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessWord: guessedWord, letterMatchCount: LetterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      });
    }
  };
};

export const getSecretWords = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3030").then((res) => {
      dispatch({
        type: actionTypes.SET_SECRET_WORDS,
        payload: res.data,
      });
    });
  };
};
