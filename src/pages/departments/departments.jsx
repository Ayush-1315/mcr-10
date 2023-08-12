import { useNavigate } from "react-router";
import css from "./departments.module.css";
import { useData } from "../../context/dataContext";

export const Departments=()=>{
    const navigate=useNavigate();
    const {dataDispatch}=useData();
    const clickHandler=(searchField)=>{
        dataDispatch({type:"SET_DEPT",payload:searchField})
        navigate('/products');
    }
    return <div className={css.deptContainer}>
        <div className={css.deptCards} onClick={()=>clickHandler("Kitchen")}>
            <h2>Kitchen</h2>
        </div>
        <div className={css.deptCards} onClick={()=>clickHandler("Clothing")}>
            <h2>Clothing</h2>
        </div>
        <div className={css.deptCards} onClick={()=>clickHandler("Toys")}>
            <h2>Toys</h2>
        </div>
    </div>
}