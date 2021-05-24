import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       isShowCounter: state.isShowCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       isShowCounter: state.isShowCounter,
//     };
//   }

//   if (action.type === "clearcounter") {
//     return {
//       counter: initialState.counter,
//       isShowCounter: state.isShowCounter,
//     };
//   }

//   if (action.type === "togglecounter") {
//     return {
//       counter: state.counter,
//       isShowCounter: !state.isShowCounter,
//     };
//   }
//   return initialState;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
