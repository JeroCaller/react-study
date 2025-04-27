import axios from 'axios';
import { useState, useEffect } from 'react';

const ShowExternalData = () => {

  const [data, setData] = useState({});

  useEffect(() => {

    const fetchData = async () => {
      try {
        const axiosPromise = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        const resData = axiosPromise.data;
        if (resData != null) {
          setData(resData);
        } else {
          alert("fetching data failed.");
        }
      } catch (e) {
        console.error("데이터 가져오는 도중 에러 발생");
        console.error(e);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div>
      <h3>외부 데이터 가져오기 결과</h3>
      <ul>
        <li>userId : {data.userId}</li>
        <li>postId : {data.id}</li>
        <li>title : {data.title}</li>
        <li>content: {data.body}</li>
      </ul>
    </div>
  );
}

export default ShowExternalData;