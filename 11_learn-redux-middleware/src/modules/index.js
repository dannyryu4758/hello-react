import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
// import sample from "./sample-thunk";
import sample, { sampleSaga } from "./sample-saga";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
