

const CommonNewsPage = (props) => {

  return (
    <div>
      <h3>{props.data.title}</h3>
      <div>{props.data.content}</div>
    </div>
  );
};

export default CommonNewsPage;
