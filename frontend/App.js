import React, { lazy, Suspense } from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const LazyDetails = lazy(() => import('././Pages/DetailsPage/Details'));

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/*" element = {<Suspense fallback={<Skeleton count={10} />}> <LazyDetails/> </Suspense>} />

      </Routes>
  </Router>
  )
};

export default App;
