import React, {useState} from 'react';
import styled from 'styled-components';
import { Button,  Form,  Radio, RadioChangeEvent, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';

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
  padding: 80px 100px;
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
  width: 70px;
  height: 35px;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 20px;
  position: absolute;
  right: 0;
`;

const StyledRadio = styled(Radio)`
  margin-bottom: 35px;
  font-family: 'Noto Sans', sans-serif;
  span {
    font-size: 15px;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;

export default function Identification() {
   const [value, setValue] = useState(0);

   const onChange = (e: RadioChangeEvent) => {
     console.log('radio checked', e.target.value);
     setValue(e.target.value);
   };

  const navigate = useNavigate();

  return (
    <Wrap>
      <Content>
        <Title>LaGonave - Mhealth</Title>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
          <Radio.Group onChange={onChange} value={value} size={'large'}>
            <Space direction="vertical">
              <StyledRadio value={1}>
                <UserOutlined />
                Enrolled patients
              </StyledRadio>
              <StyledRadio value={2}>
                <UserAddOutlined />
                New patients
              </StyledRadio>
            </Space>
          </Radio.Group>
          <Form.Item>
            <StyledButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={value === 0}
              onClick={() => (value === 1 ? navigate('/patient/search-patient') : navigate('/patient/register-form'))}
            >
              next
            </StyledButton>
          </Form.Item>
        </Form>
      </Content>
    </Wrap>
  );
}
