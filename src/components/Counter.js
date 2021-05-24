import { useSelector, useDispatch } from "react-redux";
import {counterActions} from "../store/counter";
// import { Component } from "react";
// import { connect } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShowCounter = useSelector((state) => state.counter.isShowCounter);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const onIncrease = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const clearCounter = () => {
    dispatch(counterActions.clearCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div hidden={isShowCounter} className={classes.value}>
        {counter}
      </div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={clearCounter}>Clear Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   onIncrement() {
//     this.props.increment();
//   }

//   onDecrement() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.onIncrement.bind(this)}>Increment</button>
//         <button onClick={this.onDecrement.bind(this)}>Decrement</button>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapsStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapsDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapsStateToProps, mapsDispatchToProps)(Counter);
