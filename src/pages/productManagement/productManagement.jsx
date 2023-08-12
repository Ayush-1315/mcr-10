import { useState } from "react";
import css from "./productmanager.module.css";

export const ProductManagement=()=>{
    const [formData,setFormData]=useState({
        department:"",
        name:"",
        description:"",
        sku:"",
        price:0,
        supplier:"",
        delivered:0,
        imageUrl:""
    })
    return <div className={css.manager}>
        <h2>Add New Product</h2>
    </div>
}