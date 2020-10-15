import React from "react";
//-- qs : URL쿼리 사용을 위한 라이브러리 (쿼리 문자열을 객체로 변환)
import qs from "qs";

// const About = () => {
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
//     </div>
//   );
// };

//-- location(Route로 상용된 컴포넌트에게 props로 전달받음)을 활용한 URL쿼리 사용
//-- location은 다음의 요소를 가진 객체이다 : { "pathname":"/about", "search":"?detail=true", "hash":"" }
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 '?' 생략
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열로만 반환된다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};
export default About;
