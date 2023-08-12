import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar/sidebar";
import { Products } from "./pages/products/products";
import { ProductManagement } from "./pages/productManagement/productManagement";
import { Dashboard } from "./pages/dashboard/dashboad";
import { Departments } from "./pages/departments/departments";
import { ProductDetail } from "./pages/productDetail/productDetail";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/department" element={<Departments/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:pId" element={<ProductDetail/>}/>
          <Route path="/add-product" element={<ProductManagement/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
