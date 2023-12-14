import { Link } from "react-router-dom";
import "./Header.scss";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);


const Header = () => {
  return (
    <div className="header_container">

    <ul>
   <Link className="nav_link" to=""><li>Home</li></Link>
   <Link className="nav_link" to="./shop"><li>Shop</li></Link>
   <Link className="nav_link" to="./about"><li>About us</li></Link>
   </ul>




    <Space direction="vertical"> 
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="normal"
      suffix={suffix}
      onSearch={onSearch}
      className="search_header"
    />
  </Space>
   <Link  to="./login" ><h4>Sign In</h4></Link>
   <Link to="./basket"> <h4>Basket</h4></Link>
    

   



    </div>
  )
}

export default Header