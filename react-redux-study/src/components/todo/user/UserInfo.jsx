import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/todo/slices/userSlice";

/**
 * 현재 유저 정보를 화면에 보인다.
 * 
 * @returns 
 */
const UserInfo = () => {

  const user = useSelector(selectUser);

  return (
    <div className="user-info box">
      <ul>
        <li>
          <label htmlFor="username">유저네임: </label>
          <input 
            type="text" 
            id="username" 
            value={user.username} 
            readOnly={true} 
          />
        </li>
        <li>
          <label htmlFor="message">메시지: </label>
          <input 
            type="text" 
            id="message" 
            value={user.message}
            readOnly={true} 
          />
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
