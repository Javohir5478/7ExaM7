
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import About from './pages/About'
import Basket from './pages/Basket'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NewProducts from './pages/NewProducts'
import Register from './pages/Register'
import Shop from './pages/Shop'
import ForMen from './pages/ForMen';
import ForWomen from './pages/forWomen'
import Jewellary from './pages/Jewellary'
import Electronics from "./pages/Electronics"
import AdminLayout from './components/layout/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import Categories from './pages/admin/Categories'

function App() {
 

  return (
    <>
{/* <AdminLayout/> */}
  {/* <Products/> */}

   <BrowserRouter>
       <Routes>
        <Route>


              {/* <Route path="/login" element={<LoginPage/>}/> */}
              <Route path="./register" element={<Register/>}/>
          
            {/* <Route path="./dashboard" element={<Dashboard/>}/>
            <Route path="./products" element={<Products/>}/>
            <Route path="./categories" element={<Categories/>}/> */}


            <Route path="/login" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<AdminLayout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="categories" element={<Categories/>}/>
        </Route>
            


            <Route path="/" element={<Layout/>}>
            <Route path="" element={<HomePage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="newproducts" element={<NewProducts/>}/>
             <Route path="shop" element={<Shop/>}/>
             <Route path="men" element={<ForMen/>}/>
             <Route path="women" element={<ForWomen/>}/>
             <Route path="jewel" element={<Jewellary/>}/>
             <Route  path="electr" element={<Electronics/>}/>

              <Route path="basket" element={<Basket/>}/>




</Route>


        </Route>
       </Routes>
   </BrowserRouter>


    </>
  )
}

export default App
