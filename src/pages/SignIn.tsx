// src/pages/SignIn.tsx
import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../helper';

const { Title } = Typography;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    axios
    .post(`https://wallets-feature-be.mangomoss-3595ef97.uksouth.azurecontainerapps.io/api/company/login`, {
      email:values.email,
      password:values.password
    })
    .then((res) => {
      const userData = res.data;
      console.log(userData);
      setUserInfo(userData)
      navigate('/landing');
    })
    .catch(console.error);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <Card className="w-[500px] p-8 shadow-lg">
        <Title level={2} className="text-center">Sign In</Title>
        <Form
          name="signIn"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
