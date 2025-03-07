import { Link } from "react-router-dom";

const LoginFailure = () => {

  return (
    <div>
      <p>소셜 로그인에 실패했습니다. </p>

      <Link to={"/"}>로그인 화면으로 돌아가기</Link>
    </div>
  );
};

export default LoginFailure;