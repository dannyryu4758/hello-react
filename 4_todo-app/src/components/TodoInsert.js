import React, { useState, useCallback, useRef } from 'react';
import { MdAlarmAdd } from './react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const todoInput = useRef(null);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
      todoInput.current.focus();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
        ref={todoInput}
      />
      <button type="submit">
        <MdAlarmAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
