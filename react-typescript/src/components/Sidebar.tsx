import { NavLink } from 'react-router';
import type { UriInfoArrayProps } from '../types';

/**
 * 사이드바 컴포넌트. 각 페이지들을 항목으로 하며, 사용자가 특정 항목 클릭 시 
 * 그에 해당하는 페이지로 라우팅됨.
 * 
 * React.FC 타입은 현재는 추천되지 않는 사용방법이라고 함. 
 * 대신 prop에 직접 타입을 표기해주는 게 좋다고 함. 이는 RouterSet.tsx를 참고.
 * 
 * @returns 
 */
const SideBar: React.FC<UriInfoArrayProps> = ( { uriInfo } ) => {

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
