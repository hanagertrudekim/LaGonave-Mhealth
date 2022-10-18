import React from 'react'
import styled from 'styled-components'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
  @import '~antd/dist/antd.css';
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 518px;
  height: 610px;
  padding: 80px 118px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: black;
  margin-bottom: 100px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
`;

const StyledButton = styled(Button)`
  background: #0078f0;
  border-radius: 5px;
  margin-top: 70px;
`;

const StyledInput = styled(Form.Item)`
  margin-bottom: 40px;
`

export default function Login() {
  
  const navigate = useNavigate();

 const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    //인증토큰 로그인 기능 추가
  };

  return (
    <Wrap>
      <Content>
        <Title>LaGonave - Mhealth</Title>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <StyledInput name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </StyledInput>
          <StyledInput name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </StyledInput>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <StyledButton
              type="primary"
              block
              htmlType="submit"
              className="login-form-button"
              onClick={() => navigate("/patient/first-form")}
            >
              Log in
            </StyledButton>
          </Form.Item>
        </Form>
      </Content>
    </Wrap>
  );
};
