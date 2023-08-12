import { createContext,useContext, useReducer } from "react";
import { dataReducer, initialData } from "../reducer/reducer";
const DataContext=createContext();
export const DataProvider=({children})=>{
    const [dataState,dataDispatch]=useReducer(dataReducer,initialData);
    return <DataContext.Provider value={{dataState,dataDispatch}}>
        {children}
    </DataContext.Provider>
}
export const useData=()=>useContext(DataContext);