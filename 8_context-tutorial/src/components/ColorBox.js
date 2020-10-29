// import React from "react";
// // import ColorContext from "../contexts/color";
// import { ColorConsumer } from "../contexts/color";

// const ColorBox = () => {
//   return (
//     //-- Consumer로 Context의 값을 조회/사용 한다.
//     // <ColorContext.Consumer>
//     <ColorConsumer>
//       {/* {(value) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: value.state.color,
//               // background: value.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: value.state.subcolor,
//             }}
//           />
//         </>
//       )} */}
//       {({ state }) => (
//         <>
//           <div
//             style={{
//               width: "64px",
//               height: "64px",
//               background: state.color,
//               // background: value.color,
//             }}
//           />
//           <div
//             style={{
//               width: "32px",
//               height: "32px",
//               background: state.subcolor,
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//     // </ColorContext.Consumer>
//   );
// };

// export default ColorBox;

//=============================================================
//-- useContext Hook 사용하기
import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
