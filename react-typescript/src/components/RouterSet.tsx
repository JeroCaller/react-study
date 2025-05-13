import { Routes, Route } from 'react-router';
import NotFound from '../pages/NotFound';
import type { UriInfoArrayProps } from '../types';

const RouterSet = ( { uriInfo }: UriInfoArrayProps ) => {

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
