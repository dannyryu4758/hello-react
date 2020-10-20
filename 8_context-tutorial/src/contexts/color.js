import { createContext } from "react";

//-- 새 Context를 만들때는 createContext() 함수를 사용한다.
//-- createContext() 함수 파라미터는 Context 의 기본상태 지정
const ColorContext = createContext({ color: "black" });

export default ColorContext;
