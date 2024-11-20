import { useState } from 'react';

const List = () => {

    const [favFoods, setfavFoods ] = useState([
        "햄버거", "소고기무국", "삼겹살"
    ]);

    const changeFoodHandler = () => {
        //setfavFoods((prevData) => prevData[0] = "피자");  // 에러
        
        
        // 작동 안됨
        /*
        setfavFoods((prevData) => {
            prevData[0] = "피자";
            return prevData;
        });*/

        // 작동 잘 됨
        setfavFoods((prevData) => {
            let newData = [...prevData];  // 깊은 복사
            newData[0] = "피자";
            return newData;
        });
    }    

    return (
        <div>
            <h1>내가 좋아하는 음식들</h1>
            <ul>
                {favFoods.map((food, idx) => (
                    <li key={idx}>{food}</li>
                ))}
            </ul>
            <button onClick={changeFoodHandler}>상태 변경하기</button>
        </div>
    );
}

export default List;