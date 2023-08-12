import { useState } from "react";
import css from "./productmanager.module.css";
import { useData } from "../../context/dataContext";

export const ProductManagement = () => {
    const {addData}=useData();
  const initialData = {
    department: "",
    stock:0,
    name: "",
    description: "",
    sku: "",
    price: 0,
    supplier: "",
    delivered: 0,
    imageUrl: "",
  };
  const [formData, setFormData] = useState({ ...initialData });
  const changeHandler = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
  }
const submitData=()=>{
addData(formData);
setFormData({...initialData});
}
  return (
    <div className={css.manager}>
      <h2>Add New Product</h2>
      <label htmlFor="dept">Department</label>
      <select
        name="dept"
        id="dept"
        defaultValue={0}
        onChange={(e) => changeHandler("department", e.target.value)}
      >
        <option value="0" disabled>
          Select Department
        </option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => changeHandler("name", e.target.value)}
      />
      <label htmlFor="desc">Description</label>
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="5"
        onChange={(e) => changeHandler("description", e.target.value)}
      ></textarea>
      <label htmlFor="Price">Price</label>
      <input
        type="number"
        onChange={(e) => changeHandler("price", Number(e.target.value))}
        defaultValue={0}
      />
      <label htmlFor="stock">Stock</label>
      <input
        type="number"
        id="stock"
        onChange={(e) => changeHandler("stock",Number(e.target.value))}
        defaultValue={0}
      />
      <label htmlFor="sku">SKU</label>
      <input type="text" id="sku" onChange={e=>changeHandler("sku",e.target.value)}/>
      <label htmlFor="supplier">Supplier</label>
      <input
        type="text"
        onChange={(e) => changeHandler("supplier", e.target.value)}
        id="supplier"
      />
      <label htmlFor="delivered">Delivered</label>
      <input
        type="number"
        onChange={(e) => changeHandler("delivered", Number(e.target.value))}
        defaultValue={0}
        id="delivered"
      />
      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="text"
        id="imageUrl"
        onChange={(e) => changeHandler("imageUrl", e.target.value)}
      />
      <button onClick={()=>submitData()}>Add Product</button>
    </div>
  );
};
