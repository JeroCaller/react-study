import { useState } from "react";

const ControlledCompEx = () => {

  const messageStyle = {
    error: {
      color: 'red',
    },
    granted: {
      color: 'green',
    },
  };

  const [ username, setUsername ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ messageCss, setMessageCss ] = useState(null);

  /**
   * 
   * @param {Event} event 
   */
  const handleInputChange = event => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  /**
   * 
   * @param {Event} event 
   */
  const handleSubmit = event => {
    event.preventDefault();

    if (!username) {
      setMessage("아이디를 입력하셔야합니다.");
      setMessageCss(messageStyle.error);
      return;
    }

    if (username.length <= 5 || username.length >= 20) {
      setMessage("아이디는 최소 5글자, 최대 20글자 이내여야 합니다.");
      setMessageCss(messageStyle.error);
      return;
    }

    setMessage("사용 가능한 아이디입니다.");
    setMessageCss(messageStyle.granted);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">ID: </label>
        <input 
          type="text" 
          id="userId" 
          name="username" 
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">입력</button>
      </form>
      <p style={messageCss}>Message: {message}</p>
    </div>
  );
};

export default ControlledCompEx;
