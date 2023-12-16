/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */



import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import getStore from "./getStore/getStore";
// import Loading from "../components/loading/Loading";



const AppContext = createContext();
const url ="https://fakestoreapi.com/products";




const AppProvider =({children}) =>{

  const [basket,setBasket] = useState(getStore("basket2"));



  // const [loading ,setLoading] = useState(false);

  // const [Count,setCount] =useState(0);
 
  const [data, setData] = useState([]);
 

  // if (loading) {
  //   return <Loading/>
  // }

 const handleBasket =(id) => {
  const newItem = data.find((item) => item.id===id);
  setBasket([...basket,newItem]);
};
//  const handleDelete =(id) => {
//   const newItem = data.find((item) => item.id!==id);
//   setBasket([basket]);
// };







    const getData = async () => {
    // setLoading (true);

    try{
    const res= await fetch(url);
    const data = await res.json();
    setData(data);
    console.log(data);
    }
    catch(error) {
        console.log(error);
        // setLoading(false);
    }
};
useEffect(() =>{
         getData(url);
           localStorage.setItem("basket2", JSON.stringify(basket))


        
        },[data,basket]);

return(
       


        <AppContext.Provider value={{
            data,
            handleBasket,
            basket
        } } >
        
            {children}
        </AppContext.Provider>
       )
}



export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};