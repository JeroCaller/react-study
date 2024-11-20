
// 객체 구조 분해 할당을 이용하여 인자를 받는다. 
const Display = (props) => {

    // 스타일도 줄 수 있다!
    let myStyle = {
        backgroundColor: props.data.color
    }

    return (
        <div style={myStyle}>
            <h1>{props.data.title}</h1>
            <p>{props.data.message}</p>
            <p>컬러</p>
        </div>
    );
}

export default Display;