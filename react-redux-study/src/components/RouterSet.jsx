import { Routes, Route } from 'react-router';
import NotFound from '../pages/NotFound';

/**
 * 
 * @param {Object} props
 * @param { Array<import('../App').UriInfo> } props.uriInfo
 * @returns 
 */
const RouterSet = ( { uriInfo } ) => {

  return (
    <div className='router-set'>
      <Routes> 
        { uriInfo.map((data, idx) => <Route 
          key={idx} 
          path={data.uriPath} 
          element={data.element} 
        />) }

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RouterSet;
