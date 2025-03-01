// redux-actions를 사용하기
import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의하기
// 액션 타입은 대문자, 문자열 내용은 '모듈이름/액션이름'
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
// -- export 함으로써 다른 파일에서도 해당 함수를 불러와 사용 가능
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// -- redux-actions 의 createAction 함수를 사용하여 액션 생성함수 간결하게 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기값 설정
const initialState = {
  number: 0,
};

// 리듀서 함수 만들기
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
// -- redux-actions 의 handleActions 함수를 사용하여 리듀서 함수 간결하게 만들기
// -- handleActions('각 액션에 대한 업데이트 함수', '초기상태')
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;

// * export와 export default의 차이
//   - export : 여러개를 내보낼 수 있음
//              ==> 불러오기 : import counter from './counter';
//   - export default: 한개만 내보낼 수 있음
//              ==> 불러오기 : import {increase, decrease} from './counter';
