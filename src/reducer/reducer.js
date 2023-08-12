import { inventoryData } from "../db/data";
export const initialData = {
  allProducts: JSON.parse(localStorage.getItem("inventory"))||[...inventoryData],
  category: "all",
  lowStock: false,
  sortBy: "",
  filteredData: JSON.parse(localStorage.getItem("inventory"))||[...inventoryData],
};
export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DEPT":
      return {
        ...state,
        category: payload,
        filteredData:
          payload !== "all"
            ? state?.allProducts.filter(
                ({ department }) => department === payload
              )
            : [...state?.allProducts],
      };
    case "LOW_STOCK":
      return { ...state, lowStock: payload };
    case "SORT_BY":
      const newArr = state?.filteredData;
      switch (payload) {
        case "name":
          return {
            ...state,
            filteredData: newArr.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            }),
            sortBy: payload,
          };
        case "price":
          return {
            ...state,
            filteredData: newArr.sort((a, b) => a.price - b.price),
            sortBy: payload,
          };
        case "stock":
          return {
            ...state,
            filteredData: newArr.sort((a, b) => a.stock - b.stock),
            sortBy: payload,
          };
        default:
          return { ...state };
      }
      case "ADD_DATA":return{...state,allProducts:[...state?.allProducts,payload]}
    default:
      return state;
  }
};
