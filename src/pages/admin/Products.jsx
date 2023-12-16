import { Button, Form, Input, Modal, Space, Table} from 'antd';
import { Fragment, useEffect, useState } from 'react';
import request from '../../server';
import request1 from '../../server/request';


const Products= ()=>{

const [data,setData] =useState([]);
const [form] = Form.useForm();
const [selected,setSelected]=useState(null)

 const [open, setOpen] = useState(false);
useEffect(() =>{
  getData();
}, []);
async function getData(){
  try {
  let {data} = await request1.get("");
  setData(data);
  }
  catch (err){
console.log(err);
  }
}

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },

  {
    title: 'price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Image',
    key: 'image',
    dataIndex: 'image',
    render: (image,row) => {
      
        
      return (
        <img height="50" src={image} alt={row.firstNAme + row.lastName} />
      )},
  },
    
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='primary ' onClick={()=> edit(record.id)}>Edit</Button>
        <Button danger type="primary">Delete</Button>
      </Space>
    ),
  },
];



  const showModal = () => {
    setSelected(null);
    setOpen(true);
    form.resetFields();
  };
  const handleOk = async () => {
 try {
  const values = await form.validateFields();
  if(selected === null) {
    await request.post("",values);
  } else {
  await request.put(`/${selected}`,values);
     
  }
  setOpen(false);
} catch (err){
  console.log(err);
}
  };

  const handleCancel = () => {
    setOpen(false);
  };
async function edit (id) {
  setSelected(id);
  setOpen(true);
let {data} = await request1.get(`/${id}`);
form.setFieldValue(data);
}

return    <Fragment><Table
bordered title={()=> <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
<h1>Teachers</h1>
<Button type="primary" onClick={showModal}> Add</Button>
</div>}
columns={columns} dataSource={data} />;
 <Modal
        open={open}
        title="Data of Product"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item
        name="title"
        label="title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="price"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="image"
        type="file"
        rules={[
          {
            required: true,
            message:"Iltimos toldiring brat"
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      
    </Form>
      </Modal>
</Fragment>
}
export default Products;