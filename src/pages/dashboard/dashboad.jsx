import { useData } from "../../context/dataContext";
import css from "./dashboad.module.css";
export const Dashboard = () => {
  const { dataState } = useData();
  const stockDetails = dataState?.allProducts?.reduce(
    (acc, curr) => {
      return {
        total: acc.total + curr.stock,
        totalDelivered: acc.totalDelivered + curr.delivered,
        lowStock: curr.stock <= 10 ? acc.lowStock + 1 : acc.lowStock,
      };
    },
    { total: 0, totalDelivered: 0, lowStock: 0 }
  );
  return <div className={css.dashboard}>
    <div className={css.total}>
        <h2>{stockDetails?.total}</h2>
        <p>Total Stock</p>
    </div>
    <div className={css.delivered}>
        <h2>{stockDetails?.totalDelivered}</h2>
        <p>Total Stock</p>
    </div>
    <div className={css.low}>
        <h2>{stockDetails?.lowStock}</h2>
        <p>Total Stock</p>
    </div>
  </div>;
};
