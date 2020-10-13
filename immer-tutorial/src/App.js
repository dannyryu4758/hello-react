import React, {useRef, useCallback, useState} from 'react';

function App() {
  const nextId = useRef('');
  const [form, setForm] = useState({name:'', username=''});
  const [data, setData] = useState({
    array : {},
    uselessValue : null
  });

//-- input 수정을 위한 함수
const onChange = useCallback(
  e=>{
    const {name, value} = e.target;
    setForm({
      ...form,
      [name] : [value]
    });
  },[form]
);

// form 등록을 위한 함수
const onSubmit = useCallback(
  e=>{
    e.prevenDefault();
    const info = {
      id : nextId.current,
      name : form.name,
      username : form.username
    };

    // array 에 새 항목 등록
    setData({
      ...data,
      array : data.array.concat(info)
    });

    // form 초기화
    setForm({
      name : '',
      username : '',
    });
    nextId.current += 1;
  },
  [data, form.name, form.username]
)

// 항목을 삭제하는 함수
const Remove = useCallback(
  id=>{
    setData({
      ...data,
      array : data.array.filter(info => info.id !== id)
    });
  },
  [data]
)

  return (
    <div>
        <form onSubmit={onSubmit}>
          <input name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}/>
          <input name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}/>
          <button type="submit">등록</button>
        </form>
    </div>
  );
}

export default App;
