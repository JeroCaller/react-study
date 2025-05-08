import { useRef, useState } from "react";

/**
 * @typedef {Object} UserResponse
 * @property {String} username
 * @property {String} message
 * 
 */


const FormDataEx = () => {

  const formElement = useRef(null);

  /**
   * @type {[UserResponse | null, *]}
   */
  const [ serverData, setServerData ] = useState(null);

  /**
   * 
   * @param {Event} event 
   */
  const handleSubmitForm = event => {
    event.preventDefault();

    const formData = new FormData(formElement.current);
    const formDataJson = JSON.stringify(Object.fromEntries(formData.entries()));

    // FormData 객체 내 key, value 모두 출력하기
    for (const [key, value] of formData) {
      console.log(`key: ${key}, value: ${value}`);
    }

    fetch('http://localhost:8080/users', {
      method: 'POST',
      body: formDataJson,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      setServerData(data);
    })
    .catch(error => {
      console.error("에러 발생");
      console.error(error);
    });
  };

  return (
    <div className="form-data-ex">
      <form onSubmit={handleSubmitForm} ref={formElement}>
        <ul>
          <li>
            <label htmlFor="username">username: </label>
            <input 
              type="text" 
              id="username" 
              name="username" 
            />
          </li>
          <li>
            <label htmlFor="message">message: </label>
            <input 
              type="text" 
              id="message" 
              name="message" 
            />
          </li>
        </ul>
        <button type="submit">제출</button>
      </form>
      <div className="box">
        <p>HTTP Response result</p>
        <div className="box message">
          { (serverData !== null) ? <>
            <p>username: {serverData.username}</p>
            <p>message: {serverData.message}</p>
          </> :  ''}
        </div>
      </div>
    </div>
  );
};

export default FormDataEx;
