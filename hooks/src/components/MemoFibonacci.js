import {memo, useMemo, useRef, useState} from 'react';

const MemoFibonacci = () => {

    // 피보나치 계산 끝났는지 여부 확인용.
    const [isFinished, setIsFinished] = useState(true);

    // 함수 실행 시간 기록용
    const [seconds, setSeconds] = useState(0);

    // 모든 계산 내역 저장용
    /*
        [
            {id: 1, n: 10, time: 30}, ...
        ]
    */
    const [allResults, setAllResults] = useState([]);
    const [nextId, setNextId] = useState(1);

    //const [result, setResult] = useState(0);
    const [inputNum, setInputNum] = useState(0);
    const inputElement = useRef(null);

    const fibonacci = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibonacci(n-1) + fibonacci(n-2);
    }
    
    const stopwatch = (func) => {
        return (...args) => {
            const start = Date.now();
            setIsFinished(false);

            let result = func(...args);

            const end = Date.now();
            let elapsedMillies = end - start;
            setIsFinished(true);
            setSeconds((prevState) => elapsedMillies);
            console.log(`실행 시간: ${elapsedMillies}`);

            setAllResults((prevState) => [...prevState, {id: nextId, n: args[0], time: elapsedMillies}]);
            setNextId((prevState) => prevState + 1);
            
            return result;
        }
    }

    const calculate = (event) => {
        let userNum = Number(inputElement.current.value);
        setInputNum(userNum);
    }

    // useMemo 사용
    const memoizationResult = useMemo(() => {
        const decoratedFunc = stopwatch(fibonacci);
        console.log("메모 콜백 함수 호출됨 " + nextId);
        return decoratedFunc(inputNum);
        
    }, [inputNum]);

    /**
     * 
     * @param {Event} event 
     */
    const enterKeyDownHandler = event => {
        if (event.key === 'Enter') {
            calculate();
        }
    }

    return (
        <div>
            <h3>피보나치 수 계산기 (by useMemo) (n=0부터 시작)</h3>
            <input type="number" 
                id="num" ref={inputElement} 
                onKeyDown={enterKeyDownHandler}
            />
            <button onClick={calculate}>계산</button>

            <div>
                <p>계산 결과</p>
                {
                    (isFinished) ?
                    <div>
                        <p>F({inputNum}) = {memoizationResult}</p>
                        <p>계산 소요 시간(밀리초): {seconds}</p>
                    </div> :
                    <p>계산 중...</p>
                }
            </div>

            <hr/>
            <div>
                <p>계산 내역</p>
                <table border="1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>n</th>
                            <th>elapsedMillies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allResults.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.id}</td>
                                    <td>{record.n}</td>
                                    <td>{record.time}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MemoFibonacci;