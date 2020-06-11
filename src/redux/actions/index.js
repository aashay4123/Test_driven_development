import { getLetterMatchCount } from "../../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
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

// export const
