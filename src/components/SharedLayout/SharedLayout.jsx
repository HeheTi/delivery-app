import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className="container">
      <Header />

      <Suspense fallback={<p>...Loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
