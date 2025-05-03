import { useState } from "react";
import UserEdit from "./user/UserEdit";
import UserInfo from "./user/UserInfo";

const UserDisplay = () => {

  const [ isEditMode, setIsEditMode ] = useState(false);

  const handleChangeEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div>
      { isEditMode ? <UserEdit setEditMode={handleChangeEditMode} /> : <UserInfo /> }
      <button onClick={handleChangeEditMode}>
        { isEditMode ? "읽기모드로" : "편집하기"}
      </button>
    </div>
  );
};

export default UserDisplay;
