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
    console.log(currPath);
    return <div className={css.sidebarContainer}>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/department">Departments</Link></li>
            <li onClick={()=>navigatePage()}>Products</li>
        </ul>
    </div>
}