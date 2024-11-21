import { useState } from "react";

const MyComp = () => {

    const [number, setNumber] = useState(0);
    
    /**
     * 
     * @param {Event} event 
     */
    const increase = event => {
        setNumber(number + 1);
    }

    return (
        <> 
            <button onClick={increase}>숫자 증가</button>
            <p>
                <span>현재 숫자: </span>
                <span>{number}</span>
            </p>
        </>
    );
}

export default MyComp;