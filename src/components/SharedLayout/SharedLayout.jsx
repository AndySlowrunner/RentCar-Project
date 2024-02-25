import Header from 'components/Heder/Heder';
import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
      <>
        <Header />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
};

export default SharedLayout;