import React from 'react';
import {  Checkbox, Col, Input } from 'antd';
import useStep from '../useStep';
import { useNavigate } from 'react-router-dom';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import TextArea from 'antd/lib/input/TextArea';
import UpLoad from '../../../components/UpLoad';
import * as S from './Diagnosis.style'

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

export default function Diagnosis() {

  const { StepComponents } = useStep();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    //TODO: Add diagnosis Form api
    navigate('/patient/submit-complete');
  };

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const medicalHistoryArr = ['diabetes', 'Blood-pressure', 'allergy'];
  const presentHxArr = ['Smoke', 'Drink']

  return (
    <S.Wrap>
      <S.StepWrap>
        <StepComponents />
      </S.StepWrap>
      <S.StyledForm name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Col span={20}>
          <S.StyledFormItem name={['user', 'Diagnosis area']} label="Diagnosis area" rules={[{ required: true }]}>
            <Input />
          </S.StyledFormItem>
        </Col>
        <S.StyledFormItem name={['user', 'medical-history']} label="medical-history">
          <Checkbox.Group options={medicalHistoryArr} onChange={onChange} />
        </S.StyledFormItem>
        <Col span={15}>
          <S.StyledFormItem name={['user', 'present-Hx']} label="present-Hx">
            <Checkbox.Group options={presentHxArr} onChange={onChange} />
          </S.StyledFormItem>
          <S.StyledFormItem name={['user', 'Heart-Problem']} label="Heart-Problem">
            <Input />
          </S.StyledFormItem>
          <S.StyledFormItem name={['user', 'Facial Trouma Hx']} label="Facial Trouma Hx">
            <Input />
          </S.StyledFormItem>
          <S.StyledFormItem name={['user', 'Medication']} label="Medication">
            <Input />
          </S.StyledFormItem>
        </Col>
        <S.StyledFormItem name={['user', 'Detail Diagnosis']} label="Detail Diagnosis">
          <TextArea showCount maxLength={100} style={{ height: 150 }} />
        </S.StyledFormItem>
        <S.StyledFormItem name={['user', 'Picture']} label="Picture">
          <UpLoad/>
        </S.StyledFormItem>
        <S.StyledFormItem>
          <S.StyledButton type="primary" htmlType="submit">
            submit
          </S.StyledButton>
        </S.StyledFormItem>
      </S.StyledForm>
    </S.Wrap>
  );
}
