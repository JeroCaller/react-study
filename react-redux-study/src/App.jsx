import './App.css'
import SideBar from './components/Sidebar';
import RouterSet from './components/RouterSet';
import NoReduxCounterPage from './pages/NoReduxCounterPage';
import ReduxCounterPage from './pages/ReduxCounterPage';
import TodoPage from './pages/TodoPage';
// import { mockUriInfo } from './mock/mockData';

/**
 * @typedef {Object} UriInfo
 * @property {String} title - 화면에 보일 요소명
 * @property {String} uriPath - 라우팅 URI. 예) "/users"
 * @property {JSX.Element | null} element - uri와 매핑되어 렌더링될 컴포넌트
 */


const App = () => {

  const uris = [
    {
      title: "메인",
      uriPath: "/",
      element: null
    },
    {
      title: "no redux counter",
      uriPath: "/no-redux-counter",
      element: <NoReduxCounterPage />
    },
    {
      title: "with redux counter",
      uriPath: "/redux-counter",
      element: <ReduxCounterPage />
    },
    {
      title: "투두리스트",
      uriPath: "/todo",
      element: <TodoPage />
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
