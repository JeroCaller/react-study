import { useState } from "react";

interface MessageStyle {
  [propName: string]: React.CSSProperties;
}

const ControlledCompEx = () => {

  /*
  const messageStyle: {
    error: React.CSSProperties,
    granted: React.CSSProperties
  } = {
    error: {
      color: 'red',
    },
    granted: {
      color: 'green',
    },
  };
  */
  
  const messageStyle: MessageStyle = {
    error: {
      color: 'red',
    },
    granted: {
      color: 'green',
    },
  };

  const [ username, setUsername ] = useState<string>('');
  const [ message, setMessage ] = useState<string>('');
  const [ messageCss, setMessageCss ] = useState<React.CSSProperties | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
