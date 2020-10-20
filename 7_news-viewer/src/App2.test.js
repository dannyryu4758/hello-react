import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  // const onClick = () => {
  //   //-- axios를 활용한 비동기로 데이터 불러오기
  //   axios
  //     //-- GET방식으로 가져온 것을
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     //-- then을 통해 비동기로 구현
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  //-- async/await를 적용하여 비동기적으로 데이터 불러오기
  //-- await : axios로 데이터를 다 받을 때까지 기다림
  //-- async : axios로 받은 데이터를 지정한 변수에 담기
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=1ac83f48cc3742b98cb258502ba71211',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          //-- 비동기로 가져온 데이터 뿌려주기
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
