import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = () => {

  // 로그인 성공한 인증자의 현재 정보를 가져와 저장하기 위한 상태 변수.
  const [myInfo, setMyInfo] = useState(null);

  const navigator = useNavigate();

  // 로그인 성공 후 현재 유저의 정보를 백엔드로부터 가져온다. 
  useEffect(() => {
    axios.get("http://localhost:8080/members/my")
      .then(response => {
        console.log(response);
        if (response.data != null) {
          setMyInfo(response.data.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  /**
   * 
   * @param {Event} event 
   */
  const handleLogout = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/auth/logout")
      .then(response => {
        alert("로그아웃에 성공하였습니다.");

        // 메인 페이지로 이동
        navigator("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (myInfo == null) {
    return (
      <div>
        <h3>인증에 성공하였으나 인증 정보를 가져오는데에 실패했습니다.</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>소셜 로그인 성공</h3>
      <p>사용자 정보</p>
      <ul>
        <li>username : {myInfo.username}</li>
        <li>email : {myInfo.email}</li>
        <li>role : {myInfo.role}</li>
      </ul>
      <button onClick={handleLogout}>로그아웃하기</button>
    </div>
  );
};

export default MyPage;