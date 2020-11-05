import React from 'react';
import Counter from '../components/Counter';
//-- 컴포넌트를 리덕스와 연동하기 위한 함수
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 상태값(state)을 props로 넘겨주는 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// 액션 생성 함수를 props로 넘겨주는 함수
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

//-- const makeContainer = connect(mapStateToProps, mapDispatchToProps);
//-- makeContainer(리덕스와 연동시킬 컴포넌트);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  //   (dispatch) => ({
  //     increase: () => dispatch(increase()),
  //     decrease: () => dispatch(decrease()),
  //   }),

  //-- bindActionCreators 활용하여 dispatch로 감싸주는 작업 간소화
  //   (dispatch) =>
  //     bindActionCreators(
  //       {
  //         increase,
  //         decrease,
  //       },
  //       dispatch,
  //     ),

  //-- connect 함수 내부적으로 bindActionCreators 작업을 대신 해줌
  {
    increase,
    decrease,
  },
)(CounterContainer);
