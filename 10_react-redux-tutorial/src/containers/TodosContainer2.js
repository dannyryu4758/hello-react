import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '..components/Todos';
import useActions from '../lib/useActions';

const TodosContainer2 = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  //   const dispatch = useDispatch();
  //   const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
  //     dispatch,
  //   ]);
  //   const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  //   const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  //   const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  //-- useActions 유틸을 활용한 코드 간소화
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// connect 함수를 사용하지 않으면 부모 컴포넌트가 리렌더링 될 때
// 컨테이너 컴포넌트의 props가 바뀌지 않더라도 리렌더링 되기 때문에
// 성능 최적화를 위해 memo를 사용하여 최적화 해준다.
export default React.memo(TodosContainer2);
