import moxios from "moxios";
import { storeFactory } from "../../../test/testUtils";
import { getSecretWords } from "./";
// import { correctGuess, actionTypes } from "./index";

// describe("correct Guess", () => {
//   test("should return with action `CORRECT_GUESS`", () => {
//     const action = correctGuess();
//     expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
//   });
// });

describe("get SecretWord from server", () => {
  beforeEach(() => {
    moxios.install(); //paramter maybe axios instance if any
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("should add response word to State", () => {
    const secretWord = "partyy";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWords()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
