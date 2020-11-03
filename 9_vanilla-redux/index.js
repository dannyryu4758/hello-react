//-- 스토어 만들기
import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//-- 액션 타입과 액션 생성 함수 정의
//-- 액션 이름 정의 (액션 이름은 고유값으로 지정)
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREACE';
//-- 액션 생성 함수 작성
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//-- 초기값 설정(숫자, 문제, 객체 등)
const initialState = {
  toggle: false,
  counter: 0,
};

//-- 리듀서 함수 정의 (파라미터로 state와 action 을 받는다.)
//state가 undefinded 일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해 주어야 합니다.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//-- 스토어 만들기 (파라마터는 reducer함수를 입력)
const store = createStore(reducer);

//-- render 함수 만들기
const render = () => {
  const state = store.getState(); // 스토어 내장함수 - 현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
//-- 구독하기(상태 업데이트 마다 render)
store.subscribe(render);

//-- 액션 발생시키기(파라미터는 액션 객체를 넣는다.)
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

// *** 주의사항
// 1. 단일 스토어 : 프로젝트 하나에 스토어 하나
// 2. 읽기전용 상태 : 불변성 유지 (immer 사용 가능)
// 3. 리듀서는 순수한 함수
