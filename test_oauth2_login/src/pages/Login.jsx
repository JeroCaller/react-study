import axios from 'axios';

const Login = () => {

  /**
   * 주의사항) 구글 OAuth에서는 CORS를 지원하지 않는다고 한다. 
   * 따라서 axios와 같은 방식을 이용한 요청은 CORS 문제에 의해 
   * 구글 로그인 창이 뜨지 않는 문제점이 발생한다. 
   * 
   * 따라서 <a href="..."> 또는 <form>을 대신 이용해야 한다. 
   * 아래 함수는 CORS 문제에 의해 작동하지 않는 함수.
   * 
   * @param {Event} event 
   */
  const handleOAuthLogin = (event) => {
    event.preventDefault();

    axios.get("http://localhost:8080/oauth2/authorization/google", {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        console.log(error.code);
      });
  
  }

  return (
    <div>
      <h3>소셜 로그인</h3>
      {/*<button onClick={handleOAuthLogin}>Google</button>*/}
      {<a href="http://localhost:8080/oauth2/authorization/google">Google</a>}
    </div>
  );
};

export default Login;