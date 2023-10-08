import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Wrapper } from './Layout.style';
import { Loader } from '../Loader/Loader';
import NavBar from '../NavBar/NavBar';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
}
