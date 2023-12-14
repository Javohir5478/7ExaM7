
import { Button, Input,Space,Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { Button, Checkbox, Input } from "antd";
// import { Form } from "react-router-dom";
import "./Pages.scss";



const Register = () => {




  return (
    <div className="register_container">
      <h1>Register</h1>

       <Input
       className="register_f"
      placeholder="Firstname....."
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
               </Tooltip>
      }
    />
     <Input
      className="register_f"
      placeholder="Lastname....."
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
               </Tooltip>
      }
    />
     <Input
      className="register_f"
      placeholder="Username....."
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
               </Tooltip>
      }
    />

         <Space 
         direction="vertical"
         >
      <Input.Password
       className="register_f"
      placeholder="password" />
      <Input.Password
       className="register_f"
        placeholder="Confirm password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      </Space>
       <Button className="register_btn" >Register</Button>


             

    </div>
  )
}


export default Register;