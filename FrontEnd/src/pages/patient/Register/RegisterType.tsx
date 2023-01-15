import React, {useState} from 'react';
import {  Form,  Radio, RadioChangeEvent, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './RegisterType.style'

export default function RegisterType() {
   const [value, setValue] = useState(0);

   const onChange = (e: RadioChangeEvent) => {
     console.log('radio checked', e.target.value);
     setValue(e.target.value);
   };

  const navigate = useNavigate();

  return (
    <S.Wrap>
      <S.Content>
        <S.Title>LaGonave - Mhealth</S.Title>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
          <Radio.Group onChange={onChange} value={value} size={'large'}>
            <Space direction="vertical">
              <S.StyledRadio value={1}>
                <UserOutlined />
                Enrolled patients
              </S.StyledRadio>
              <S.StyledRadio value={2}>
                <UserAddOutlined />
                New patients
              </S.StyledRadio>
            </Space>
          </Radio.Group>
          <Form.Item>
            <S.StyledButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={value === 0}
              onClick={() => (value === 1 ? navigate('/patient/search-patient') : navigate('/patient/register-form'))}
            >
              next
            </S.StyledButton>
          </Form.Item>
        </Form>
      </S.Content>
    </S.Wrap>
  );
}
