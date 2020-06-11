import { actionTypes } from "../actions";
import sucessReducer from "./sucessReducer";

test("should set default initial state `false`", () => {
  const newState = sucessReducer(undefined, {});
  expect(newState).toBe(false);
});

test("should set state to `false`", () => {
  const newState = sucessReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });

  expect(newState).toBe(true);
});
