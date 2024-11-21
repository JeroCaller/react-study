import {useCallback, useState} from 'react';
import Child from './Child';

const Parent = () => {

    const [counter, setCounter] = useState(0);

    /*
    const clickHandler = event => {
        setCounter((prevState) => prevState + 1);
        console.log("부모 컴포넌트의 리렌더링");
    }*/
    

    const clickHandler = useCallback(event => {
        setCounter((prevState) => prevState + 1);
        console.log("부모 컴포넌트의 리렌더링");
    }, []);

    return (
        <div>
            <h2>부모 컴포넌트</h2>
            <input type="text" readOnly value={counter} />
            <button onClick={clickHandler}>카운트하기</button>
            <hr/>

            <Child onClick={clickHandler}></Child>
        </div>
    );
};

export default Parent;