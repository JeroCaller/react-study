import { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const [colorSet, setColorSet] = useState({
        backgroundColor: 'black',
        color: 'white'
    });

    return (
        <div style={colorSet}>
            <h1>부모입니다.</h1>
            <Child styleSetter={setColorSet} />
        </div>
    );
}

export default Parent;