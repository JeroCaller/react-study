import { useState } from 'react';

const OwnCounter = () => {

    // 컴포넌트 내부에서만 사용할 값. 그런데...
    /*
    let counter = 0;
    let myCounter = {
        counter: 0
    }

    const increaseLogic = event => {
        ++counter;
        myCounter.counter += 1;
    }*/

    // counter => 이 컴포넌트 내에서 사용할 state
    let [counter, setCounter] = useState(0);
    
    let [times, setTimes] = useState(0);

    const increaseLogic = event => {
        //setCounter((prevData) => prevData + 1);
        //setTimes((prevData) => counter * 10);

        /*
        setCounter(counter + 1);
        setTimes(counter * 10);
        */

        
        setCounter((prevData) => {
            const newData = prevData + 1;
            setTimes(newData * 10);
            return newData;
        });
        
    }

    return (
        <div>
            <p>현재 카운트: {counter}</p>
            <p>열 배수: {times}</p>
            <button onClick={increaseLogic}>값 증가</button>
        </div>
    );
}

export default OwnCounter;