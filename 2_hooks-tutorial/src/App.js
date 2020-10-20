import React, { useState } from "react";
//==============================================
// 하나의 useState 활용
// useReducer 활용(컴포넌트 상황에 따른 다양한 상태를 다른 값으로 업데이트) :
//    funciton reducer(state, action){
//     switch (action.type) {
//      case "INCREMENT":
//        return { value: state.value + 1 };
//    }
//    const [state, dispatch] = useReducer(reducer, { value: 0 });
//    <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>

// import Counter from "./Counter";

// function App() {
//   return <Counter />;
// }
//================================================
// 여러개의 useState 활용
// useEffect 활용 (렌더링될때 수행할 작업 설정) : useEffect(()=>{설정})
// 마운트(첫 렌더링)만 적용 희망시 : useEffect(()=>{},[])
// 특정값 업데이트시에만 적용 희망시 : useEffect(()=>{},[해당변수])
// 이전 state 와 같은 값은 렌더링하지 않는다.
// 언마운트/업데이트 직전 작업 수행(뒷정리 함수) : useEffect(()=>{설정; return ()=>{뒷정리 함수}})
// 언마운트만 작업수행 : useEffect(()=>{설정; return ()=>{뒷정리 함수}}, [])

// import Info from "./Info";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };
//====================================================
// useReducer를 활용한 useState 중복 제거하기

// import Info from "./Info";

// const App = () => {
//   return <Info />;
// };
//=====================================================
// useMemo 활용 : 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행
// useCallback : 렌더링 최적화(필요한 함수만 렌더링)
import Average from './Average';

const App = ()=>{
  return <Average/>
};


export default App;
