// -- createStore함수 사용시 리듀서는 하나만 사용해야한다.
// -- combineReducers : 리듀서들을 하나로 합쳐주는 유틸함수
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// ** 파일이름을 index.js로 설정해두면 불러올때 디렉터리 이름까지만
//    입력하여 불러올 수 있음 (import rootReducers from './modules';)
