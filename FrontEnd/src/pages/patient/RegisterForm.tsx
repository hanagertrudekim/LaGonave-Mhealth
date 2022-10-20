import React from 'react'
import styled from 'styled-components'
import { Button, Col, Form, Input, InputNumber, Radio, Row, Select} from 'antd';
import useStep from './useStep';
import { Option } from 'antd/lib/mentions';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled(Form)`
  width: 40vw;
  height: auto;
  padding: 60px;
`

const StepWrap = styled.div`
  margin-top: 60px;
  width: 50vw;
`

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 35px;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

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

export default function RegisterForm() {

  const { StepComponents } = useStep();
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log(values);
    //TODO: Add client register api
    navigate('/patient/diagnosis-form')
  };

  const prefixSelector = (
    <StyledFormItem name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue='+86'>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </StyledFormItem>
  );

  return (
    <Wrap>
      <StepWrap>
        <StepComponents />
      </StepWrap>
      <StyledForm name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <StyledFormItem name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Row gutter={8}>
            <Col span={12}>
              <Input placeholder="last name" />
            </Col>
            <Col span={11}>
              <Input placeholder="first name" />
            </Col>
          </Row>
        </StyledFormItem>
        <StyledFormItem name={['user', 'gender']} label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </StyledFormItem>
        <StyledFormItem name={['user', 'Date of Birth']} label="Date of Birth" rules={[{ required: true }]}>
          <Col span={8}>
            <Input placeholder="YYYY/MM/DD" />
          </Col>
        </StyledFormItem>
        <StyledFormItem name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </StyledFormItem>
        <StyledFormItem
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </StyledFormItem>
        <StyledFormItem name={['user', 'address']} label="address">
          <Input />
        </StyledFormItem>
        <StyledFormItem name={['user', 'Facilities']} label="Facilities" rules={[{ required: true }]}>
          <Col span={14}>
            <Input />
          </Col>
        </StyledFormItem>
        <StyledFormItem>
          <StyledButton type="primary" htmlType="submit">
            register
          </StyledButton>
        </StyledFormItem>
      </StyledForm>
    </Wrap>
  );
}
