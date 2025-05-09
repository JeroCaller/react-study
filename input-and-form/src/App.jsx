import './App.css'
import RouterSet from './components/RouterSet';
import SideBar from './components/Sidebar';
import ControlledCompEx from './pages/ControlledCompEx';
import FormDataEx from './pages/FormDataEx';
import InputValueEx from './pages/InputValueEx';
import MainPage from './pages/MainPage';
import UnControlledCompEx from './pages/UnControlledCompEx';

/**
 * @typedef {Object} UriInfo
 * @property {String} title - 화면에 보일 요소명
 * @property {String} uriPath - 라우팅 URI. 예) "/users"
 * @property {JSX.Element | null} element - uri와 매핑되어 렌더링될 컴포넌트
 */

const App = () => {

  /**
   * @type {Array<UriInfo>}
   */
  const uris = [
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
    <div className='app'>
      <SideBar uriInfo={uris} />
      <RouterSet uriInfo={uris} />
    </div>
  );
};

export default App;
