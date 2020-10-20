import React, { Component } from 'react';
//===============================================
// props 및 props 기본값/기본유형 설정
// import MyComponent from './MyComponent';

// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={3}>
//       리액트
//     </MyComponent>
//   );
// };
//=========================================
// class형 state 활용 (this.state.0000, this.setState, prevState)
// import Counter from './Counter';

// const App = () => {
//   return <Counter />;
// };
//============================================
// 함수형 state 활용 (const [message, setMessage] = useState('');)
// import Say from './Say';

// const App = () => {
//   return <Say />;
// };
//=============================================
// state = { messge: '', username: ''};   this.setState({[e.target.name]: e.target.value});
// const [form, setForm] = useState({username: '', message: ''});

// import EventPractice from './EventPractice';

// const App = () => {
//   return <EventPractice />;
// };
//============================================
// ref 활용하기
// <input ref={(ref) => (this.input = ref)}>
// this.input.focus();

// import ValidationSample from './ValidationSample';

// class App extends Component {
//   render() {
//     return <ValidationSample />;
//   }
// }
//============================================
// 컴포넌트에 ref 달아 활용하기

// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }
//===================================================
// 컴포넌트 반복하기 arr.map(arg=>arg*arg), index를 활용한 key값 설정
// 함수형 컴포넌트 ref 활용
// // concat, filter를 활용한 객체형 배열 다루기 (추가/삭제하기)

// import IterationSample from './IterationSample';

// class App extends Component {
//   render() {
//     return <IterationSample />;
//   }
// }
//========================================================
// constructor(마운트:컴포넌트 생성) --> getDerivedStateFromProps(마운트/업데이트:props를 받아 state에 동기화)
//  --> shouldComponentUpdate(업데이트:리렌더링 할지 안할지 결정, true/false 리턴)
//  --> render(마운트/업데이트) --> getSnapshotBeforeUpdate(업데이트:브라우저 결과물 출력 직전 실행)
//  --> componentDidMount(마운트:첫렌더링 후 실행) / componentDidUpdate(업데이트:리렌더링 후 실행)

// error 처리 : componentDidCatch(error, info) {this.setState({error: true});

import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
