import './App.css';
import {useState} from 'react';
import MyComp from './components/MyComp';

function App() {
  const myName = "김큐엘";

  let myFavFoods = ["치킨", "소고기무국", "순대국", "삼겹살", "소고기"];

  return (
    <div className="App">
      <h3>안녕하세요, 제 이름은 {myName}입니다.</h3>
      <p>제 나이는 {21}살이며, 취미는 {"유튜브 보기"}입니다.</p>
      {/* 이렇게 JSX 내에서 주석을 달 수 있어요 */}
      
      <p>내가 좋아하는 음식</p>
      {/* 중괄호 내부는 HTML이 아닌 자바스크립트 문법이 
      들어올 수 있는 곳이다. 따라서 이를 활용하면 
      동적으로 HTML 요소들을 생성할 수 있다. */}
      <ul>
        {myFavFoods.map((food, idx) => {
          return (
              // key 속성 부여
              <li key={idx}>{food}</li>
          );
        })}
      </ul>
      <MyComp></MyComp>
    </div>
  );
}

export default App;
