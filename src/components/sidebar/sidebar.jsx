import { Link,useNavigate,useLocation } from "react-router-dom";
import { useData } from "../../context/dataContext";
import css from "./sidebar.module.css";
export const Sidebar=()=>{
    const {dataDispatch}=useData();
    const navigate=useNavigate();
    const navigatePage=()=>{
        navigate("/products");
        dataDispatch({type:"SET_DEPT",payload:"all"});
    }
    const currPath=useLocation().pathname;
    return <div className={css.sidebarContainer}>
        <ul>
            <li className={currPath==="/"?css.selected:css.tab}><Link to="/">Dashboard</Link></li>
            <li className={currPath==="/department"?css.selected:css.tab}><Link to="/department">Departments</Link></li>
            <li onClick={()=>navigatePage()} className={currPath==="/products"?css.selected:css.tab}>Products</li>
        </ul>
    </div>
}