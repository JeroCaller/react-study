import { Link, Outlet } from "react-router";
import { mockNews } from "../mock/mockNews";

const NewsMain = () => {

  return (
    <div>
      <h1>오늘의 뉴스</h1>
      <div className="news-main">
        <h2>지역</h2>
        <ul>
          {mockNews.local.map(data => <li key={data.id}>
            <Link to={`/news/local-region/${data.id}`}>{data.title}</Link>
          </li>)}
        </ul>
        <h2>개발</h2>
        <ul>
          {mockNews.dev.map(data => <li key={data.id}>
            <Link to={`/news/dev/${data.id}`}>{data.title}</Link>
          </li>)}
        </ul>

        <hr/>

        {/* 자식 route는 부모 route 내의 <Outlet />을 통해 렌더링된다.*/}
        <Outlet /> 
      </div>
    </div>
  );
};

export default NewsMain;
