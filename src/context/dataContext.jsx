import { createContext,useContext, useEffect, useReducer } from "react";
import { dataReducer, initialData } from "../reducer/reducer";
const DataContext=createContext();
export const DataProvider=({children})=>{
    const [dataState,dataDispatch]=useReducer(dataReducer,initialData);
    const addData=(data)=>{
        const newProduct={id:dataState?.allProducts[dataState?.allProducts.length-1].id+1,...data};
        console.log(newProduct)
        dataDispatch({type:"ADD_DATA",payload:newProduct})
    }
    useEffect(()=>{
     if(localStorage.getItem("inventory")){
        localStorage.removeItem("inventory");
        localStorage.setItem("inventory",JSON.stringify(dataState?.allProducts));
     }
     else{
        localStorage.setItem("inventory",JSON.stringify(dataState?.allProducts));
     }
    },[dataState]);
    return <DataContext.Provider value={{dataState,dataDispatch,addData}}>
        {children}
    </DataContext.Provider>
}
export const useData=()=>useContext(DataContext);