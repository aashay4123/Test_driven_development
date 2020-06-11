import { storeFactory } from "../../test/testUtils";
import { guessWord } from "./actions";

describe("Guess Word action Dispatcher", () => {
  const secretWord = "partyy";
  const unsuccessfulGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("should update state unsucessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessWords: [
          {
            guessWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("should update state sucessful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessWords: [
          {
            guessWord: secretWord,
            letterMatchCount: 6,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("few guessed words", () => {
    const guessWords = [
      {
        guessWord: "agile",
        letterMatchCount: 1,
      },
    ];
    const initialState = { guessWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("should update state unsucessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessWords: [
          ...guessWords,
          { guessWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("should update state sucessful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessWords: [
          ...guessWords,
          { guessWord: secretWord, letterMatchCount: 6 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
