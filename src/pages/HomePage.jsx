import { Link } from "react-router-dom";





import  "./Pages.scss";

const img1 = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
const img2 = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
const img3 = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
const img4 = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg";


  const styled = {
    width: "1440px",
    height: "720px",
    backgroundImage: "url(/public/homelogo.png)",
  };

export default function HomePage () {

  return (
    <div className="homepage_container" >



<div className="home_header"
style={styled}>

           <h4>Posted on startup</h4>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <h5>By James West  |  May 23, 2022 </h5>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <Link to="./about">  <button className="home_btn">Read More</button> </Link>


</div>

  <div className="home_body">



     <h1>Popular Things</h1>

             <div className='popular_blogs_parent'>

               <div className='popular_card'>
                <img src={img1} alt="" />
                <h4>By John Doe   l   Aug 23, 2021 </h4>
                <h1>A UX Case Study Creating a Studious Environment for Students: </h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                 <p>45$</p>
               </div>


                 <div className='popular_card'>
                <img src={img2} alt="" />
                <h4>By John Doe   l   Aug 23, 2021 </h4>
                <h1>A UX Case Study Creating a Studious Environment for Students: </h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                 <p>45$</p>
              
               </div>


                   <div className='popular_card'>
                <img src={img3} alt="" />
                <h4>By John Doe   l   Aug 23, 2021 </h4>
                <h1>A UX Case Study Creating a Studious Environment for Students: </h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                 <p>45$</p>
              
               </div>
               
                   <div className='popular_card'>
                <img src={img4} alt="" />
                <h4>By John Doe   l   Aug 23, 2021 </h4>
                <h1>A UX Case Study Creating a Studious Environment for Students: </h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                 <p>45$</p>
               </div>

             </div>




               <div className='choose_category_home'>
    
                <h2>Choose A Catagory</h2>
                <div className='choose_parent'>

               <div className='choose_card'>
                <img src="/electr.png" alt="" />
                <Link to="/electr">   <h1>Electronics</h1>  </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>

               <div className='choose_card'>
                <img src="/jewel.png" alt="" />
                <Link to="/jewel"> <h1>Jewelery </h1>   </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>

               <div className='choose_card'>
                <img src="/men.png" alt="" />
              <Link to="/men">  <h1>For Men</h1> </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
               </div>

               <div className='choose_card'>
                <img src="/women.png" alt="" />
                 <Link to="/women"> <h1>For Women</h1>  </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
               </div>




               </div>
               </div>
         




      </div>



    </div>
  )
}
