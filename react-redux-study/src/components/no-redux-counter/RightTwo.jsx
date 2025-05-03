const RightTwo = ( { onIncrease, onDecrease } ) => {

  return (
    <div className="no-redux-box">
      <button onClick={onIncrease}>1 증가</button>
      <button onClick={onDecrease} >1 감소</button>
    </div>
  );
};

export default RightTwo;
