import { Provider } from "react-redux";
import reduxCounterStore from "../redux/redux-counter/reduxCounterStore";

import LeftOne from "../components/redux-counter/LeftOne";
import RightOne from "../components/redux-counter/RightOne";

/**
 * redux를 활용하여 state를 관리하면 전혀 다른 페이지로 라우팅했다가 다시 
 * 돌아와도 해당 state가 사라지지 않고 저장되어 있다. 
 * 
 * 만약 리덕스를 사용하지 않고 단순히 useState를 이용하면 다른 페이지로 갔다가 
 * 돌아오면 이전 state 정보가 사라져서 0으로 초기화된다. 
 * 
 * @returns 
 */
const ReduxCounterPage = () => {

  return (
    <Provider store={reduxCounterStore}>
      <div className="no-redux-page no-redux-box"> {/* CSS 스타일 재활용 */}
        <h1>리덕스 활용하여 컴포넌트 간 상태값 주고 받기</h1>
        <div className="left-right">
          <LeftOne />
          <RightOne />
        </div>
      </div>
    </Provider>
  );
};

export default ReduxCounterPage;
