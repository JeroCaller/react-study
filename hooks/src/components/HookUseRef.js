import {useState, useRef} from 'react';

const HookUseRef = () => {

    const nameInput = useRef(null);
    const foodSelect = useRef(null);

    const [userName, setUserName] = useState('');
    const [food, setFood] = useState('');

    /**
     * 
     * @param {Event} event 
     */
    const handleClick = event => {
        event.preventDefault();
        console.log(nameInput.current.value);
        console.log(foodSelect.current.value);

        setUserName(nameInput.current.value);
        setFood(foodSelect.current.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="name">이름: </label>
                <input type="text" name="name" id="name" ref={nameInput} />
                <p>음식 선택</p>
                <select name="food" ref={foodSelect} defaultValue="pizza">
                    <option value="burger">햄버거</option>
                    <option value="pizza">피자</option>
                    <option value="pasta">파스타</option>
                </select>
                <button onClick={handleClick}>제출</button>
            </form>
            <hr/>
            <div>
                <h3>사용자 정보 출력란</h3>
                <p>이름 : {userName}</p>
                <p>좋아하는 음식: {food}</p>
            </div>
        </div>
    );
}

export default HookUseRef;