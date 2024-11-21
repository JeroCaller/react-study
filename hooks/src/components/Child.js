import React from "react";

const Child = (props) => {

    console.log("자식입니다.");
    
    return (
        <div>
            <h3>자식 컴포넌트</h3>
            <button onClick={props.onClick}>자식 버튼</button>
        </div>
    );
};

export default React.memo(Child);
//export default Child;