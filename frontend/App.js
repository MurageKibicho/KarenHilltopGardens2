import React, { lazy, Suspense , useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const LazyDetails = lazy(() => import('././Pages/DetailsPage/Details'));
import ReactGA from 'react-ga4';
const App = () => {
  return(
    <>
    <GoogleAnalytics />
    
    <Router>
      <Routes>
        <Route path="/*" element = {<Suspense fallback={<Skeleton count={10} />}> <LazyDetails/> </Suspense>} />

      </Routes>
  </Router>
  </>
  )
};

export default App;
//https://ospaarmann.medium.com/google-analytics-4-ga4-in-next-js-14-and-react-with-event-tracking-2ceabb00c59a
function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('G-JBS4WVXKKW');
      window.GA_INITIALIZED = true;
    }
  }, []);
}
