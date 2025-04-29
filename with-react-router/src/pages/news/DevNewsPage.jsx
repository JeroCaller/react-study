import { useParams } from "react-router";
import { mockNews } from "../../mock/mockNews";
import CommonNewsPage from "./CommonNewsPage";
import NewsNotFound from "./NewsNotFound";

const DevNewsPage = () => {

  // URL의 dynamic segment를 가져온다.
  // 예) URL : /users:userId => params.userId;
  const params = useParams(); 
  const newsData = mockNews.dev.find(data => Number(params.id) === data.id);

  if (newsData === undefined || null) {
    <NewsNotFound />
    return;
  };

  return (
    <div>
      <CommonNewsPage data={newsData} />
    </div>
  );
};

export default DevNewsPage;
