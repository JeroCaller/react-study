import { useRef } from 'react';

const Child = (props) => {

    // JSX로 작성한 HTML 태그를 DOM으로 
    // 접근 가능한 Hook.
    // document.querySelector() 와 같은 효과.
    // useRef() 함수의 반환값은 항상 current 프로퍼티를 가지고 있어
    // 그 안에 current.id 와 같이 요소의 여러 속성들을 가지고 있음.
    const spanElement = useRef(null);

    const changeStyleHandler = event => {
        const toggleVars = {
            on: {
               name: 'bw',
               style: {
                    backgroundColor: 'black',
                    color: 'white'
               }
            },
            off: {
                name: 'br',
                style: {
                    backgroundColor: 'blue',
                    color: 'red'
                }
            }
        };

        if (spanElement.current.textContent === toggleVars.on.name) {
            props.styleSetter(toggleVars.off.style);  // 부모의 state 변경 시도
            spanElement.current.textContent = toggleVars.off.name;
        } else if (spanElement.current.textContent === toggleVars.off.name) {
            props.styleSetter(toggleVars.on.style);  // 부모의 state 변경 시도
            spanElement.current.textContent = toggleVars.on.name;
        }
    }
    
    return (
        <div>
            <h3>자식입니다.</h3>
            <span ref={spanElement}>bw</span>
            <button onClick={changeStyleHandler}>스타일 변경하기</button>
        </div>
    );
}

export default Child;