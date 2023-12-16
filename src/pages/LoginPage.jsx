// import "./Pages.scss";
// import {  Button, Checkbox, Form, Input } from "antd";
// import { useNavigate } from "react-router-dom";



// export function LoginPage  () {
//   const navigate = useNavigate();

//   const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

//   return (
//     <div className="login_container">
//       <h2 id="h2">Hi, keep track of your favorites!</h2>
//       <h5>Please sign in.</h5>

//     <Form
//     className="Form_login"
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item

//       label="Username"
//       name="username"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
  
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit" >
//         Submit
//       </Button>
//     </Form.Item>
      
    
//   </Form>
//  <Form>
//       <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="white" htmlType="submit" className="create_btn"
//       onClick={navigate("./register")}
//       >
//         Create an  Account
//       </Button>
//     </Form.Item>
//     </Form>


        

//     </div>
//   )
// }
 

// export default LoginPage;
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';


const LoginPage= () => {

 const navigate = useNavigate();
 const  [loading,setLoading] = useState(false);
    const onFinish = async (values) => {
    try {
      setLoading(true);
     await axios.post("https://reqres.in/api/login", values);
         navigate("/dashboard");

    } catch(err) {
    message.error("Email or password invalid");
}
    };

  return (
    <div
    style={
        {
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }

    }>
         <Form
    name="login"
    labelCol={{
      span: 24,
    }}
    wrapperCol={{
      span: 24,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
            type:"email",
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button
      loading={loading}
       type="primary"
        htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default LoginPage

