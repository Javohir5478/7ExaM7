
import { useGlobalContext } from "../utils/Context";

import "./Pages.scss"
import "./Category.scss"
const Electronics = () => {

   const {data,handleBasket} = useGlobalContext();




const newData = data.filter((data) => data.category === "electronics" )





  return (
     <div className="business_container">
        

        <div className="business_header">

            <h1>Electronics</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
             <h3>The best Electronics in The World</h3>
        </div>
        <div className='business_body'>

                <form>
                    <input className='business_input' type="text" placeholder='Searching.....' />

                </form>

              <div className="category_products"> 
      {newData.map((item) =>{
        const{id,title,image,price,description,category} = item ;
        return (
           <div className="card_category" key={id}>
        <img src={image} alt="" /> 
           <div className="card_category_body">
           <h1>{category}</h1>
           <h2>{title}</h2>
            <p>{description}</p>         
             <p>{price}</p> 
             <button onClick={() => handleBasket(item.id)} className="category_btn">+ Add to Basket</button>

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

export default Electronics;