import Header from "./containers/header/Header";
import AllMovie from "./screens/AllMovies/AllMovie";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import NowShowing from "./screens/NowShowing/NowShowing";


function App() {
  return (
    <div className="App">
      <Header />
<NowShowing/>
    </div>
  );
}

export default App;
