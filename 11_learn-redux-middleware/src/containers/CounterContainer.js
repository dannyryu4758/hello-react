import React from "react";
import { connect } from "react-redux";
// import { increase, decrease } from "../modules/counter";
//-- redux-thunk 사용을 위해 별도로 액션 객체를 대신할 함수를 가져온다.
import { increaseAsyn, decreaseAsyn } from "../modules/counter";
import Counter from "../components/Counter";

// const CounterContainer = ({ number, increase, decrease }) => {
const CounterContainer = ({ number, increaseAsyn, decreaseAsyn }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsyn}
      onDecrease={decreaseAsyn}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsyn,
    decreaseAsyn,
  },
)(CounterContainer);
