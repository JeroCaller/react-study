import './App.css';
import Counter from './components/Counter';
import Display from './components/Display';
import {useState} from 'react';
import OwnCounter from './components/OwnCounter';
import List from './components/List';

function App() {

  let [count, setCount] = useState(0);

  let data = {
    message: "wow",
    color: "green",
    title: "오호라"
  };

  const increaseCount = event => {
    setCount((prevData) => count + 1);
  }

  return (
    <div className="App">
      <Display
       data={data}
      ></Display>
      <hr/>
      <Counter count={count}></Counter>
      <button onClick={increaseCount}>숫자 증가시키기</button>

      <hr/>
      <OwnCounter></OwnCounter>
      <hr/>
      <List></List>
    </div>
  );
}

export default App;
