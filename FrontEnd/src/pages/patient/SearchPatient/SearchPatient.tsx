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

const SearchInput = styled(Input)`
  width: 260px;
`


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
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="inline"
        >
          <Form.Item
            label="phone_number"
            name="phone_number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <SearchInput />
          </Form.Item>
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

