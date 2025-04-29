import { Link, NavLink } from "react-router";

const Tabs = () => {

  return (
    <ul className="tab">
      <li><Link to="/">메인으로</Link></li>
      <li><Link to="/my-info">유저 정보</Link></li>
      <li><NavLink to="/products">상품 목록</NavLink></li>
      <li><NavLink to="/news">뉴스</NavLink></li>
    </ul>
  );
};

export default Tabs;
