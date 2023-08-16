import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fallback } from "./components/fallback/Fallback";
import {ROUTES } from "./constants/Route";
import Header from "./containers/header/Header";
import Protected from "./protected/Proteced";
import Home from "./screens/Home/Home";


const LazyNowShowing = lazy(() => import("./screens/NowShowing/NowShowing"));
const LazyAllMovie = lazy(() => import("./screens/AllMovies/AllMovie"));
const LazyLogin = lazy(() => import("./screens/Login/Login"));


function App() {
  const islogged = JSON.parse(localStorage.getItem("islogged"));
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path={ROUTES.HOME.path} element={<Home />} />
          <Route
            path={ROUTES.ALLMOVIES.path}
            element={
              <Suspense fallback={<Fallback />}>
                <LazyAllMovie />
              </Suspense>
            }
          />

          <Route
            path={ROUTES.SHOWTIME.path}
            element={
              <Protected isLoggedIn={islogged} redirectionURL={ROUTES.SHOWTIME.redirectionURL}>
            <Suspense fallback={<Fallback />}>
              <LazyNowShowing/>
            </Suspense>
              </Protected>
              
            }
          />
          

          <Route
            path={ROUTES.LOGIN.path}
            element={
              <Suspense fallback={<Fallback />}>
                <LazyLogin />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
