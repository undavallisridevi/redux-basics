import { createStore } from "redux";
const initialValue = { counter: 0, showCounter: true };
const counterReducer = (state = initialValue, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "INCREMENTBYVALUE") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
