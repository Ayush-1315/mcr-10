import { Link } from "react-router-dom";
import { useData } from "../../context/dataContext";
import css from "./products.module.css";
export const Products = () => {
  const { dataState, dataDispatch } = useData();
  const { lowStock} = dataState;
  const filteredByStock = dataState?.filteredData.filter(({ stock }) =>
    lowStock ? stock <= 10 : stock > 10
  );
  const filteredProducts = filteredByStock;
  return (
    <div>
      <div className={css.header}>
        <h2>Products</h2>
        <select
          name="dept"
          id="dept"
          onChange={(e) =>
            dataDispatch({ type: "SET_DEPT", payload: e.target.value })
          }
        >
          <option value="all" defaultValue={dataState.category}>
            All Departments
          </option>
          <option value="Kitchen" defaultValue={dataState.category}>
            Kitchen
          </option>
          <option value="Clothing" defaultValue={dataState.category}>
            Clothing
          </option>
          <option value="Toys" defaultValue={dataState.category}>
            Toys
          </option>
        </select>
        <span>
          <input type="checkbox" id="lowStock" onChange={e=>dataDispatch({type:"LOW_STOCK",payload:e.target.checked})}/>
          <label htmlFor="lowStock">Low Stock Items</label>
        </span>
        <select name="sort" id="sort" onChange={e=>dataDispatch({type:"SORT_BY",payload:e.target.value})}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <span className={css.newBtn}><Link to="/add-product">New</Link></span>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td className={css.imageContainer}>
                  <img
                    src={product?.imageUrl}
                    alt="product"
                    className={css.tableImage}
                  />
                </td>
                <td>
                  <Link to={`/product/${product.id}`}>{product?.name}</Link>
                </td>
                <td>
                  <p>{product?.description}</p>
                </td>
                <td>${product?.price}</td>
                <td>{product?.stock}</td>
                <td>{product?.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
