import React from "react";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    //-- Context Provider 사용
    //-- Context의 value를 변경해준다.
    //-- * Provider 사용했는데 value 값을 주지 않으면 오류 발생
    // <ColorContext.Provider value={{ color: "red" }}>
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
    // </ColorContext.Provider>
  );
};

export default App;
