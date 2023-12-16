import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">

   <ul>
    <b><li>  Participle+
132 Smith Street
Brooklyn, NY 14231

Contact Us</li> </b>
    <Link to="https://t.me/Javohir5478"><li> Contact us</li></Link>
   </ul>

   <ul>
   <b> <li>Customer Care</li> </b>
    <li> FAQs</li>
    <li>Orders & Returns</li>
    <li>Account </li>
    <li>About Us</li>
   </ul>
   <ul>
    <b><li> Connect</li> </b>
    <li>Telegram</li>
    <li>Instagram</li>
    <li>Facebook</li>
    <li>Pinterest</li>
   </ul>

   <form action="">
    <input
     type="email" 
     placeholder="Please input your  Email"
     className="input_footer"
     />
   </form>
   <button className="btn_footer">Sign Up!</button>


    </div>
  )
}

export default Footer;