import LeftTwo from "./LeftTwo";

const LeftOne = ( { counter } ) => {

  return (
    <div className="no-redux-box">
      <LeftTwo counter={counter} />
    </div>
  );
};

export default LeftOne;
