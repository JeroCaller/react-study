import { NavLink } from 'react-router';

/**
 * 사이드바 컴포넌트. 각 페이지들을 항목으로 하며, 사용자가 특정 항목 클릭 시 
 * 그에 해당하는 페이지로 라우팅됨.
 * 
 * @param {Object} props
 * @param {Array<import('../App').UriInfo> } props.uriInfo
 * @returns 
 */
const SideBar = ( { uriInfo } ) => {

  if (uriInfo === null || undefined) {
    return <div>none</div>
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-title'>
        <p>사이드바</p>
      </div>
      <ul>
        { uriInfo.map((data, idx) => <li key={idx}>
            <NavLink to={data.uriPath}>
              {data.title}
            </NavLink>
        </li>) }
      </ul>
    </div>
  );
};

export default SideBar;
