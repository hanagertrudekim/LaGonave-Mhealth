import { Button, Form, Input, Radio, Space } from 'antd';
import React from 'react'
import styled from 'styled-components'
import PatientList from './PatientList';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Searchbar = styled.div`
  width: 65vw;
  margin-top: 100px;
  padding: 50px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  display: flex;
`;

const SearchButton = styled(Button)`
  margin-left: 30px;
`

const PatientListWrap = styled.div`
  width: 65vw;
  margin-top: 40px;
  border: 1px solid #d9d9d9;
`;


export default function SearchPatient() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

   const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrap>
      <Searchbar>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="inline"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="Date of Birth"
            rules={[{ required: true, message: 'Please input your Date of Birth!' }]}
          >
            <Input placeholder="YY/MM/DD" />
          </Form.Item>
          <Radio.Group>
            <Radio value="male">M</Radio>
            <Radio value="Female">F</Radio>
          </Radio.Group>
          <Space align="end">
            <Form.Item>
              <SearchButton type="primary" htmlType="submit">
                Search
              </SearchButton>
            </Form.Item>
          </Space>
        </Form>
      </Searchbar>
      <PatientListWrap>
        <PatientList />
      </PatientListWrap>
    </Wrap>
  );
}

