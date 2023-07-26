import { Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Template from "./pages/Template/Template";
import OrderPlaced from "./pages/orderPlaced/OrderPlaced";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="/categories/*" element={<Category />} />
          <Route path="/order-confirm-page" element={<OrderPlaced />} />
          <Route path="/*" element={<Error />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
