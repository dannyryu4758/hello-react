//-- redux-acitons 라이브러리 사용
import { createAction, handleActions } from 'redux-actions';
//-- immer 라이브러리 사용 : 불변성 유지
import produce from 'immer';

// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크해제
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// 액션 생성 함수 만들기
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해집니다.
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

//-- createAction 함수 사용해 액션 행성 함수 만들기
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

// 초기 상태값 설정
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// handleActions 함수를 활용해 리듀서 함수 만들기
const todos = handleActions(
  {
    // [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    //-- 비구조화 할당 문법 적용(action 값의 payload 이름 새로 설정)
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    //-- immer (produce) 사용하여 불변성 유지하기
    // produce(state, (draft) => {
    //   draft.input = input;
    // }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    //-- immer (produce) 사용하여 불변성 유지하기 (immer사용하는게 코드가 더 길면 사용하지 않아도 된다.)
    // produce(state, (draft) => {
    //   draft.todos.puch(todo);
    // }),
    [TOGGLE]: (state, { payload: id }) =>
      // ({
      //   ...state,
      //   todos : state.todos.map(todo=>todo.id === id ? {...todo, done: !todo.done} : todo),
      // }),
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    // produce(state, (draft) => {
    //   const index = draft.todos.findIndex((todo) => todo.id === id);
    //   draft.todos.splice(index, 1);
    // }),
  },
  initialState,
);

export default todos;
