import React from 'react';
// import Counter from './components/Counter';
// import CounterContainer from './containers/CounterContainer';
import CounterContainer2 from './containers/CounterContainer2';
// import Todos from './components/Todos';
// import TodosContainer from './containers/TodosContainer';
import TodosContainer2 from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      {/* <Counter number={0} /> */}
      <CounterContainer2 />
      <hr />
      {/* <TodosContainer /> */}
      <TodosContainer2 />
    </div>
  );
};

export default App;
