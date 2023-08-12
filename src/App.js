import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/sidebar";
import { Products } from "./pages/products/products";
import { ProductManagement } from "./pages/productManagement/productManagement";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/add-product" element={<ProductManagement/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
