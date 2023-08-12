import { Link } from "react-router-dom";
import css from "./sidebar.module.css";
export const Sidebar=()=>{
    return <div className={css.sidebarContainer}>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/department">Departments</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    </div>
}