//-- withRouter : 라우트를 사용하지 않는 컴포넌트에서 match, location, history 객체 접근 가능토록

import React from "react";
//-- withRouter 불러오기
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />

      <h4>match</h4>
      <textarea
        //-- withRouter를 사용하면 현재 자신을 보여주고 있는
        //-- 라우트 컴포넌트(현재 Profiles)를 기준으로 match가 전달됨.
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />

      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};
//-- withRouter를 사용할 때는 컴포넌트를 내보내 줄때 함수로 감싸 준다.
export default withRouter(WithRouterSample);
