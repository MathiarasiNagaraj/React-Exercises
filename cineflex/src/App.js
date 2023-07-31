import { lazy,Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/header/Header";
import AllMovie from "./screens/AllMovies/AllMovie";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import {Bars} from "react-loader-spinner"
const LazyNowShowing=lazy(()=>import("./screens/NowShowing/NowShowing"))
const LazyAllMovie = lazy(() => import("./screens/AllMovies/AllMovie"))
const LazyLogin=lazy(()=>import("./screens/Login/Login"))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allMovies" element={ <Suspense fallback={<Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />}>
              <LazyAllMovie />
            </Suspense>} />
          <Route path="/showTime" element={
            <Suspense fallback={<Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />}>
              <LazyNowShowing />
            </Suspense>}/>
          <Route path="/login" element={ <Suspense fallback={<Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />}>
              <LazyLogin />
            </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
