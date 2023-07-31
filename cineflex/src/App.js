import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/header/Header";
import AllMovie from "./screens/AllMovies/AllMovie";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import NowShowing from "./screens/NowShowing/NowShowing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allMovies" element={<AllMovie />} />
          <Route path="/showTime" element={<NowShowing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
