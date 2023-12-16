import axios from "axios";

  
  const  request = axios.create({
    baseURL:"https://fakestoreapi.com/products",
    timeout:10000,

  })
  export default request;