import { useParams } from "react-router"
import { useData } from "../../context/dataContext";
import css from "./productDetail.module.css";
export const ProductDetail=()=>{
    const {pId}=useParams();
    const {dataState:{allProducts}}=useData();
    const currentProduct=allProducts.find(({id})=>id===Number(pId));
    console.log(currentProduct);
    return <div className={css.detailContainer}>
        <h2>{currentProduct?.name}</h2>
        <img src={currentProduct?.imageUrl} alt="product" className={css.displayImage}/>
        <p>Price: ${currentProduct?.price}</p>
        <p>Stock: {currentProduct?.stock}</p>
        <p>Supplier: {currentProduct?.supplier}</p>
        <p>Department: {currentProduct?.department}</p>
        <p>SKU: {currentProduct?.sku}</p>
        <p>Delivered: {currentProduct?.delivered}</p>
        <p>Description: {currentProduct?.description}</p>
    </div>
}