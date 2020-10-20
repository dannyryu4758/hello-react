import React, { useReducer, useCallback, useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// useReducer 사용하여 최적화 하기
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로추가
      // { type : 'INSERT', todo: {id : 1, text : 'todo', checked : false} }
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // { type : 'REMOVE',id : 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // { type : 'REMOVE',id : 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링해 보기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);

  //-- 임의 데이터 양 불리기!!!
  // const [todos, setTodos] = useState(createBulkTodos);
  //-- todoReducer 함수 활용!!
  //-- useReducer(정의한 함수, 초기상태값, 맨 처음 렌더링 될때만 실행할 함수)
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //-- 고유값으로 사용될 id
  //-- ref를 사용하여 변수 담기
  //-- const nextId = useRef(4);
  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      //-- todos 배열이 업데이트 될때마다 함수 새로 생성 방지를 위해
      //-- setState함수 파라미터로 함수를 넣어줌. == 함수형 업데이트
      // setTodos((todos) => todos.concat(todo));
      //-- useReducer를 활용한 최적화
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter(todo.id !== id));
    //-- todos 배열이 업데이트 될때마다 함수 새로 생성 방지를 위해
    //-- setState함수 파라미터로 함수를 넣어줌. == 함수형 업데이트
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    //-- useReducer를 활용한 최적화
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    //-- todos 배열이 업데이트 될때마다 함수 새로 생성 방지를 위해
    //-- setState함수 파라미터로 함수를 넣어줌. == 함수형 업데이트
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    //-- useReducer를 활용한 최적화
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
