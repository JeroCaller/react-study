import { useRef, useState } from "react";

const UnControlledCompEx = () => {

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

  const formElement = useRef<HTMLFormElement>(null!);
  const [ message, setMessage ] = useState<string>('');
  const [ messageCss, setMessageCss ] = useState<React.CSSProperties | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /**
     * form 태그 내 name="username"인 input 요소에 직접 접근.
     */
    const usernameText: string = formElement.current.username.value.trim();

    if (!usernameText) {
      setMessage("아이디를 입력하셔야합니다.");
      setMessageCss(messageStyle.error);
      return;
    }

    if (usernameText.length <= 5 || usernameText.length >= 20) {
      setMessage("아이디는 최소 5글자, 최대 20글자 이내여야 합니다.");
      setMessageCss(messageStyle.error);
      return;
    }

    setMessage("사용 가능한 아이디입니다.");
    setMessageCss(messageStyle.granted);
  };

  return (
    <div>
      <form ref={formElement} onSubmit={handleSubmit}>
        <label htmlFor="userId">ID: </label>
        <input type="text" id="userId" name="username" />
        <button type="submit">입력</button>
      </form>
      <p style={messageCss}>Message: {message}</p>
    </div>
  );
};

export default UnControlledCompEx;
