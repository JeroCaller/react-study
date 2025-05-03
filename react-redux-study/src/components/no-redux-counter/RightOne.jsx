import RightTwo from "./RightTwo";

const RightOne = ( { onIncrease, onDecrease } ) => {

  return (
    <div className="no-redux-box">
      <RightTwo onIncrease={onIncrease} onDecrease={onDecrease} />
    </div>
  );
};

export default RightOne;
