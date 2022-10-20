import React from 'react'
import styled from 'styled-components'
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select} from 'antd';
import useStep from './useStep';
import { Option } from 'antd/lib/mentions';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled(Form)`
  width: 50vw;
  height: auto;
  padding: 100px;
`

const StepWrap = styled.div`
  margin-top: 60px;
  width: 50vw;
`

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function NewPatient() {

  const {StepComponents} = useStep();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Wrap>
      <StepWrap>
        <StepComponents />
      </StepWrap>
      <StyledForm {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'date']} label="Date" rules={[{ required: true }]}>
          <DatePicker size={'middle'} />
        </Form.Item>
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'gender']} label="Gender">
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name={['user', 'address']} label="address">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </Wrap>
  );
}
