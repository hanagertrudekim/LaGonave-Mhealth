import React from 'react'
import {  Col,  Input, InputNumber, Radio, Row, Select} from 'antd';
import useStep from '../useStep';
import { Option } from 'antd/lib/mentions';
import { useNavigate } from 'react-router-dom';
import * as S from './Register.style'

export default function RegisterForm() {
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

  const { StepComponents } = useStep();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    //TODO: Add client register api
    navigate('/patient/diagnosis-form');
  };

  const prefixSelector = (
    <S.StyledFormItem name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue="+86">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </S.StyledFormItem>
  );

  return (
    <S.Wrap>
      <S.StepWrap>
        <StepComponents />
      </S.StepWrap>
      <S.StyledForm name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <S.StyledFormItem name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Row gutter={8}>
            <Col span={12}>
              <Input placeholder="last name" />
            </Col>
            <Col span={11}>
              <Input placeholder="first name" />
            </Col>
          </Row>
        </S.StyledFormItem>
        <S.StyledFormItem name={['user', 'gender']} label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </S.StyledFormItem>
        <S.StyledFormItem name={['user', 'Date of Birth']} label="Date of Birth" rules={[{ required: true }]}>
          <Col span={8}>
            <Input placeholder="YYYY/MM/DD" />
          </Col>
        </S.StyledFormItem>
        <S.StyledFormItem name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </S.StyledFormItem>
        <S.StyledFormItem
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </S.StyledFormItem>
        <S.StyledFormItem name={['user', 'address']} label="address">
          <Input />
        </S.StyledFormItem>
        <S.StyledFormItem name={['user', 'Facilities']} label="Facilities" rules={[{ required: true }]}>
          <Col span={14}>
            <Input />
          </Col>
        </S.StyledFormItem>
        <S.StyledFormItem>
          <S.StyledButton type="primary" htmlType="submit">
            register
          </S.StyledButton>
        </S.StyledFormItem>
      </S.StyledForm>
    </S.Wrap>
  );
}
