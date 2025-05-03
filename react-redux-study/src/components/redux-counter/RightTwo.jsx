import { useDispatch } from "react-redux";
import { decrease, increase } from "../../redux/redux-counter/countAction";

const RightTwo = () => {

  const dispatch = useDispatch();

  const handleOnIncrease = () => {
    dispatch(increase());
  };

  const handleOnDecrease = () => {
    dispatch(decrease());
  };

  return (
    <div className="no-redux-box">
      <button onClick={handleOnIncrease}>1 증가</button>
      <button onClick={handleOnDecrease}>1 감소</button>
    </div>
  );
};

export default RightTwo;
