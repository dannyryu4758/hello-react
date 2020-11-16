import { createAction, handleActions } from "redux-actions";
// -- redux-saga
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
//-- redux-thunk 를 활용하기 위한 함수
// export const increaseAsyn = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };
// export const decreaseAsyn = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

//-- redux-saga 시작
const INCREASE_ASYN = "counter/INCREASE_ASYN";
const DECREASE_ASYN = "counter/DECREASE_ASYN";
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// ()=> undefinded 를 두번째 파라미터로 넣어 줍니다.
export const increaseAsyn = createAction(INCREASE_ASYN, () => undefined);
export const decreaseAsyn = createAction(DECREASE_ASYN, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(increase()); // 특정 액션을 디스패치합니다.
  const number = yield select((state) => state.counter); // state는 스토어 상태를 의미함.
  console.log(`현재 값은 ${number}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(decrease()); // 특정 액션을 디스패치합니다.
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
  // yield takeEvery(INCREASE_ASYN, increaseSaga);
  // 첫번째 파라미터 : n초 * 1000
  yield throttle(3000, INCREASE_ASYN, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
  // 가장 마지막으로 실행된 작업만 수행합니다.
  yield takeLatest(DECREASE_ASYN, decreaseSaga);
}
//-- redux-saga 끝

const initialState = 0; // 상태는 꼭 객체일 필요가 없다. 숫자도 작동해요.

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState,
);

export default counter;
