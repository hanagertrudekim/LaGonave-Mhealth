import { Form, Space } from 'antd';
import React from 'react'
import * as S from './Search.style'
import SearchList from './SearchList';

export default function SearchPatient() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

   const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <S.Wrap>
      <S.Searchbar>
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
            <S.SearchInput />
          </Form.Item>
          <Space align="end">
            <Form.Item>
              <S.SearchButton type="primary" htmlType="submit">
                Search
              </S.SearchButton>
            </Form.Item>
          </Space>
        </Form>
      </S.Searchbar>
      <S.PatientListWrap>
        <SearchList />
      </S.PatientListWrap>
    </S.Wrap>
  );
}

