import './App.css';
import Welcome from './pages/Welcome';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
import Tabs from './components/Tabs';
import MyInfo from './pages/MyInfo';
import Products from './pages/Products';
import NewsMain from './pages/NewsMain';
import LocalNewsPage from './pages/news/LocalNewsPage';
import DevNewsPage from './pages/news/DevNewsPage';

const App = () => {

  return (
    <div>
      <Tabs />
      <div className="route">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/products" element={<Products />} />

          <Route path="/news/*" element={<NewsMain />}>
            <Route path="local-region/:id" element={<LocalNewsPage />} />
            <Route path="dev/:id" element={<DevNewsPage />} />
          </Route>
          
          {/* 현재 도메인 내에서 존재하지 않는 
            URI 입력 시 처리할 페이지로 라우팅 
          */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
