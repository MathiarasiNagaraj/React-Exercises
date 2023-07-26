
import { Route, Routes } from "react-router";
import TemplateLayout from "./layouts/TemplateLayout";
import DetailPage from "./pages/DetailPage/DetailPage";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TemplateLayout />}>
          <Route index element={<Home />} />

          <Route  path={`/details/*`} element={<DetailPage />} />

          <Route index element={<Home />} path="/*" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
