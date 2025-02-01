import { Link } from "react-router-dom";
import '../css/page.css';

const SignUp = () => {
  /**
   *
   * @param {Event} event
   */
  const handleSignUpButtonClick = (event) => {};

  return (
    <div className="page-container">
      <h1>회원가입 페이지</h1>
      <form action="/signup">
        <ul>
          <li>
            <label htmlFor="id">아이디: </label>
            <input type="text" id="id" required="required" />
          </li>
          <li>
            <label htmlFor="password">패스워드: </label>
            <input type="password" id="password" required="required" />
          </li>
        </ul>
        <button type="button" onClick={handleSignUpButtonClick}>
          회원가입
        </button>
      </form>
      <p>
        <Link to="/">회원가입 취소 후 로그인 화면으로 이동하기</Link>
      </p>
    </div>
  );
};

export default SignUp;
