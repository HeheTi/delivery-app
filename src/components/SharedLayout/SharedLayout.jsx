import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

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
