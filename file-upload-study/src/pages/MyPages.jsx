import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import FileList from "./components/FileList";

/**
 * 현재 로그인한 사용자만의 개인 공간 페이지.
 * 여기서는 사용자가 그동안 서버에 업로드한 모든 
 * 파일 정보들을 목록으로 보여준다. 
 * 
 */
const MyPages = () => {

  const authInfo = useSelector((state) => state.auth);
	
  return (
  	<div className="page-container">
      <PageHeader userInfo={authInfo} />
      <FileList userInfo={authInfo} />
  	</div>
  );
};

export default MyPages;