import { useParams } from "react-router";
import { mockNews } from "../../mock/mockNews";
import CommonNewsPage from "./CommonNewsPage";
import NewsNotFound from "./NewsNotFound";

const LocalNewsPage = () => {

  const params = useParams();
  const newsData = mockNews.local.find(data => Number(params.id) === data.id);

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

export default LocalNewsPage;
