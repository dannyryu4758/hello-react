/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const IterationSample = () => {
  //   return (
  //     <ul>
  //       <li>눈사람</li>
  //       <li>얼음</li>
  //       <li>눈</li>
  //       <li>바람</li>
  //     </ul>
  //   );
  //===========================================
  //   const names = ['눈사람', '얼음', '눈', '바람'];
  //   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  //   return <ul>{nameList}</ul>;
  //====================================================
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  // 함수형 컴포넌트에서 ref활용
  let textInput = React.createRef();

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
    // 함수형 컴포넌트에서 ref활용
    textInput.current.focus();
  };

  const doubleClick = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li
      onDoubleClick={() => doubleClick(name.id)} // p.155 참조 (렌더링 순서)
      key={name.id}
    >
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} ref={textInput} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
