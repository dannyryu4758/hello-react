import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  // Hook활용해 ref 사용하기
  const inputEl = useRef(null);
  /*
    const onChange = e =>{
        setNumber(e.target.value);
    };
    const onInsert = e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
    */

  // 이벤트 핸들러 함수를 필요할 때만 생성(모두 렌더링 할 필요 없음)
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    // ref 적용
    inputEl.current.focus();
    // 기존의 number와 list를 조회해서 사용하기 때문에 두번째 파라미터 배열 안에 number와 list 가 꼭 들어가야 한다.
  }, [number, list]); // nubmer 혹은 list 바뀌었을 때만 함수 생성

  // 렌더링 과정에서 특정 값(list)이 바뀌었을 때만 연산 실행
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* <b>평균값:</b>{getAverage(list)} */}
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
