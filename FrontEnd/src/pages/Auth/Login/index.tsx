import React, { useState, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, RadioChangeEvent } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import { useLoginUserMutation } from '../../../store/api/auth';
import { LoginValue } from '../../../model/login';
import { useAppDispatch } from '../../../utils/hooks';
import { setUser } from '../../../store/slice/authSlice';

export default function Login() {
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser, { data: loginData, isSuccess: isLoginSuccess }] = useLoginUserMutation();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onSubmit = async (values: LoginValue) => {
    if (values) {
      await loginUser({ ...values });
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(setUser({ token: loginData.access_token, user_id: loginData.user_id }));
      value === 1 ? navigate('/patient/identification') : navigate('/doctor/home');
    }
  }, [isLoginSuccess, value, navigate, loginData, dispatch]);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <S.Wrap>
      <S.Content>
        <S.Title>LaGonave - Mhealth</S.Title>
        <S.StyledRadioGroup onChange={onChange} defaultValue={'staff'}>
          <S.StyledRadio value={'staff'}>Staff</S.StyledRadio>
          <S.StyledRadio value={'doctor'}>Doctor</S.StyledRadio>
        </S.StyledRadioGroup>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          form={form}
        >
          <S.StyledInput
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </S.StyledInput>
          <S.StyledInput
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </S.StyledInput>
          <Form.Item shouldUpdate>
            {() => (
              <S.StyledButton
                type="primary"
                block
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Log in
              </S.StyledButton>
            )}
          </Form.Item>
        </Form>
      </S.Content>
    </S.Wrap>
  );
}
