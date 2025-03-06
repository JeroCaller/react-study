import axios from 'axios';

const Login = () => {

  /**
   * 
   * @param {Event} event 
   */
  const handleOAuthLogin = (event) => {
    event.preventDefault();

    axios.get("http://localhost:8080/oauth2/authorization/google")
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
      <button onClick={handleOAuthLogin}>Google</button>
    </div>
  );
};

export default Login;