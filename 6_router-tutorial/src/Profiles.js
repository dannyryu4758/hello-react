import React from "react";
// import { Route, Link } from "react-router-dom";
//-- NavLink : 현재경로의 Link 사용시 특정 스타일 적용할 수 있는 기능
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  // NavLink에 줄 스타일
  const activeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">velopert</Link> */}
          {/* -- NavLink에 activeStyle을 적용하여 스타일 바꾸기 */}
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/gildong">gildong</Link> */}
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
