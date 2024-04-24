import React, { lazy } from 'react'
import { Loader } from '../components/loader/loader';

const Main = lazy(() => import('../pages/main/main'));

const View = () => {
  return (
    <React.Suspense fallback={<Loader/>}>
      <Main />
    </React.Suspense>
  )
}

export default View