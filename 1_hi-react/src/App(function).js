import React from 'react';
//import logo from "./logo.svg";
import './App.css';

function App() {
  const name = '리엑트';
  // const name = undefined;
  // const style = {
  //   backgroundColor : 'black',
  //   color :'aqua',
  //   fontSize : '48px',
  //   fontWight : 'bold',
  //   padding : 16
  // };
  return (
    //   <div>
    //     {name === '리엑트' && <h1>리엑트입니다.</h1>}
    //     {name || '값이 undefined입니다.'}

    //  </div>
    // <div style ={style}>{name}</div>
    <div
      className="react"
      // style={{
      //   backgroundColor: "black",
      //   color: "aqua",
      //   fontSize: "48px",
      //   fontWight: "bold",
      //   padding: 16,
      // }}
    >
      {name}
    </div>
  );
}

export default App;
