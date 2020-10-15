import React from "react";
//-- Route : 화면 변경을 하지 않고 내용만 변경해서 다른 화면을 보여주는 기능
//-- 예시 : <Route path="/about" component={Home} />
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          {/* Link 컴포넌트를 활용한 페이지 이동 */}
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          {/* URL 파라미터 : "/profile/파라미터" */}
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      {/* Switch 활용 : 여러 Route 중 일치하는 단 하나의 라우트만 렌더링 */}
      <Switch>
        {/* 다른 주소 입력시 기본경로('/') 제외시키기 */}
        {/* Route 컴포넌트에 props로 exact={true} */}
        {/* <Route path="/" exact={true} component={Home} /> */}
        <Route path="/" exact={true} component={Home} />
        {/* Route 하나에 여러개의 path 설정하기 : path를 배열로 주기 */}
        <Route path={["/about", "/info"]} component={About} />
        {/* URL 파라미터 전달하기 :  path="/profile/:유동적인 값" */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          //-- path를 따로 정의하지 않으면 모든 상황에 렌더링됨.
          //-- location : Route 사용하는 컴포넌트에 자동으로 들어오고 Route로 사용되는 컴포넌트에도 자동 전달됨.
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;

//-- 리엑트 라우트 사용시 주의사항
//-- * a 태그를 사용시 렌더링된 컴포넌트가 모두 사라짐 (페이지 새로 불러옴)
//-- * a 태그 대신 Link 컴포넌트 사용 (페이지 전환 방지 기능 내장)
