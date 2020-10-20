import React, { useState, useEffect, useReducer } from "react";
//========================================================
// useState, useEffect

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   //useEffect 설정
//   //   useEffect(() => {
//   //     console.log(name);
//   //   }, [name]);

//   // 언마운트 전, 업데이트 직전 작업 수행하기 (뒷정리 함수 반환)
//   useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     //뒷정리함수 반환
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, []);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b>
//           {name}
//         </div>
//         <div>
//           <b>닉네임:</b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };
//===========================================================================
// useReducer 를 활용한 input상태 관리 및 useState 중복 제거하기
/*
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
*/

// 여러개 input 관리를 위한 useReduecer
import useInputs from "./useInputs";

const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  /*
  const onChange = (e) => {
    dispatch(e.target);
  };
  */

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
