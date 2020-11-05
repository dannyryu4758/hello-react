//-- Hooks를 사용하여 컨테이너 컴포넌트 만들기
import React, { useCallback } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer2 = () => {
  // connect 함수 대신 useSelector Hooks 사용
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const store = useStore();
  store.dispatch({ type: 'SAMPLE_ACTION' });
  store.getState();
  //-- useDispatch() 사용시 useCallback 사용 생활화하기
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer2;
