import './App.css';
import HookUseRef from './components/HookUseRef';
import Parent from './components/Parent';
import Fibonacci from './components/Fibonacci';
import FibonacciMemo from './components/MemoFibonacci';

function App() {
  return (
    <div className="App">
      <HookUseRef></HookUseRef>
      <hr/>

      <Parent></Parent>
      <hr/>

      <Fibonacci></Fibonacci>
      <hr/>
      <FibonacciMemo></FibonacciMemo>
    </div>
  );
}

export default App;
