import React from 'react';
// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
// import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
