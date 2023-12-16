import { useGlobalContext } from "../utils/Context";
import {Link} from "react-router-dom";
import "./Pages.scss";
import "./Category.scss";




const ForWomen = () => {

  const {basket,handleBasket} = useGlobalContext();




  return (
     <div className="business_container">
        

        <div className="business_header">

            <h1>Selected Products </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
             <h3></h3>
        </div>
        <div className='business_body'>

                <form>
                    <input className='business_input' type="text" placeholder='Searching.....' />

                </form>

              <div className="category_products"> 
      {basket.map((item) =>{
        const{id,title,image,price,description,category} = item ;
        return (
           <div className="card_category" key={id}>
        <img src={image} alt="" /> 
           <div className="card_category_body">
           <h1>{category}</h1>
           <h2>{title}</h2>
            <p>{description}</p>         
             <p>{price}</p> 
            <Link><button onClick={() => handleBasket(item.id)} className="category_btn">BUY NOW</button></Link>

             </div>
             {/* <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(handleEditSubmit())}>DELETE ALL</button> */}
           </div>
        )
      })}
   </div>
                
        </div>



    </div>
  )
}

export default ForWomen;