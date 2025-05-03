import { useRef } from "react";
import { useDispatch } from "react-redux";
import { inputUserInfo } from "../../../redux/todo/slices/userSlice";

const UserEdit = ( { setEditMode } ) => {

  const formElement = useRef();
  const dispatch = useDispatch();

  /**
   * 
   * @param {Event} event 
   */
  const handleUserInfoChange = event => {
    event.preventDefault();

    const formData = new FormData(formElement.current);
    console.log("FormData 객체 정보");
    formData.forEach((value, key) => {
      console.log(`key: ${key}, value: ${value}`);
    });
    
    const formObject = Object.fromEntries(formData.entries());
    console.log('폼 오브젝트 정보');
    console.log(formObject);
    console.log(formObject['username-input']);

    dispatch(inputUserInfo({
      username: formData.get('username-input'),
      message: formData.get('message-input'),
    }));

    alert("유저 정보가 성공적으로 변경되었습니다.");
    setEditMode();
  };

  return (
    <div>
      <p>유저 정보 변경</p>
      <form onSubmit={handleUserInfoChange} ref={formElement}>
        <ul>
          <li>
            <label htmlFor="username-input">유저네임: </label>
            <input type="text" id="username-input" name="username-input" />
          </li>
          <li>
            <label htmlFor="message-input">메시지: </label>
            <input type="text" id="message-input" name="message-input" />
          </li>
        </ul>
        <button type="submit">변경하기</button>
      </form>
    </div>
  );
};

export default UserEdit;
