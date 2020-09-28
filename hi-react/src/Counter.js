import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // state 의 초기값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>
        <button //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            // this.setState({ number: number + 1, fixedNumber: fixedNumber + 2 });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            }, console.log(this.state));
            //함수에서 바로 객체를 반환하기
            this.setState(
              (prevState) => ({
                fixedNumber: prevState.fixedNumber + 2,
              }),
              // 바로 객체를 반환하는 이게 콘솔에 더 빨리 찍힘
              // console.log('하하하')
              () => {
                console.log('하하하하하');
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
