import { useSelector } from "react-redux";

const LeftTwo = () => {

  const count = useSelector(state => state.count);

  return (
    <div className="no-redux-box">
      <p>count: {count}</p>
    </div>
  );
};

export default LeftTwo;
