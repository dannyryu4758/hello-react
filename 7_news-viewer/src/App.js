// import React, { useCallback, useState } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

// const App = () => {
//   const [category, setCategory] = useState(null);
//   const onSelect = useCallback((category) => setCategory(category), []);
//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

//-- Route로 뉴스 링크 걸기
import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  //-- path="/:category?" 는 선택적 파라미터(있을수도,없을수도 있는값)
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
