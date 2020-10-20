import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    //-- Context Provider 사용
    //-- Context의 value를 변경해준다.
    //-- * Provider 사용했는데 value 값을 주지 않으면 오류 발생
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
