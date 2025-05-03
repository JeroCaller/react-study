import { useState } from "react";
import LeftOne from "../components/no-redux-counter/LeftOne";
import RightOne from "../components/no-redux-counter/RightOne";

const NoReduxCounterPage = () => {

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  }

  return (
    <div className="no-redux-page no-redux-box">
      <h1>리덕스 없이 자식 컴포넌트 간 상태값 주고 받기</h1>
      <div className="left-right">
        <LeftOne counter={count} />
        <RightOne onIncrease={onIncrease} onDecrease={onDecrease} />
      </div>
    </div>
  );
};

export default NoReduxCounterPage;
