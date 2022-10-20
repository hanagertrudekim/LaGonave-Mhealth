import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input, Radio, RadioChangeEvent } from 'antd';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
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
  margin-bottom: 85px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
`;

const StyledRadioGroup = styled(Radio.Group)`
  margin-bottom: 18px;
`

const StyledRadio = styled(Radio)`
  font-size: 13px;
`

const StyledButton = styled(Button)`
  background: #0078f0;
  border-radius: 5px;
  margin-top: 80px;
`;

const StyledInput = styled(Form.Item)`
  margin-bottom: 40px;
`

export default function Login() {

  const [value, setValue] = useState(1);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  
  const navigate = useNavigate();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
      //인증토큰 로그인 기능 추가
    };

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Wrap>
      <Content>
        <Title>LaGonave - Mhealth</Title>
        <StyledRadioGroup onChange={onChange} value={value}>
          <StyledRadio value={1}>Church-staff</StyledRadio>
          <StyledRadio value={2}>Doctor</StyledRadio>
        </StyledRadioGroup>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <StyledInput name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </StyledInput>
          <StyledInput name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </StyledInput>
          <Form.Item shouldUpdate>
            {() => (
              <StyledButton
                type="primary"
                block
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                onClick={() => (value === 1 ? navigate('/identification') : navigate('/'))}
              >
                Log in
              </StyledButton>
            )}
          </Form.Item>
        </Form>
      </Content>
    </Wrap>
  );
};
