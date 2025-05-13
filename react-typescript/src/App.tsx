import './App.css';
import RouterSet from './components/RouterSet';
import SideBar from './components/Sidebar';
import ControlledCompEx from './pages/ControlledCompEx';
import FormDataEx from './pages/FormDataEx';
import InputValueEx from './pages/InputValueEx';
import MainPage from './pages/MainPage';
import UnControlledCompEx from './pages/UnControlledCompEx';

/*
타입을 가져오는 경우 `type` 키워드도 같이 사용하여 
타입을 가져오는 것임을 명시한다. 
이렇게 하지 않으면 브라우저 콘솔창에서 다음의 에러를 만나게 된다.
`Uncaught SyntaxError: The requested module '/src/types.ts' does not provide an export named 'UriInfo'`

현재 types.ts에는 타입만 정의되어 있는 상태이고, 실제 컴파일될 때에는 
타입 정의는 사라지고 자바스크립트 코드만 남기 때문에 
컴파일러는 타입만 정의되어 있는 types.ts에 아무것도 없는 상태라 인식한다. 
이 상태에서 무언가를 import 하는 시도가 진행되니 위와 같은 에러 메시지가 뜨는 것이다. 
따라서 import 하는 것이 타입임을 `import type` 과 같은 방식으로 명시해야 
해당 에러를 방지할 수 있다. 
*/
import type { UriInfo } from './types';

/**
 * `input-and-form` 리액트 프로젝트에 타입스크립트 적용 버전 프로젝트. 
 * 리액트에 타입스크립트를 어떻게 적용하는지 연습하기 위한 용도.
 * 
 * @returns 
 */
const App = () => {

  const uris: UriInfo[] = [
    {
      title: "메인",
      uriPath: "/",
      element: <MainPage />
    },
    {
      title: "UnControlled Component Ex",
      uriPath: "ex/uncontrolled",
      element: <UnControlledCompEx />
    },
    {
      title: "Controlled Component Ex",
      uriPath: "ex/controlled",
      element: <ControlledCompEx />
    },
    {
      title: "FormData Ex",
      uriPath: "ex/form-data",
      element: <FormDataEx />
    },
    {
      title: "input-value ex",
      uriPath: "ex/input-value",
      element: <InputValueEx />
    },
  ];

  return (
    <div>
      <p>타입스크립트를 적용한 간단한 리액트 웹 애플리케이션입니다.</p>
      <div className='app'>
        <SideBar uriInfo={uris} />
        <RouterSet uriInfo={uris} />
      </div>
    </div>
  );
}

export default App;
