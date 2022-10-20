import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Col, Form, Input } from 'antd';
import useStep from './useStep';
import { useNavigate } from 'react-router-dom';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import TextArea from 'antd/lib/input/TextArea';
import UpLoad from '../../components/UpLoad';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 45vw;
  height: auto;
  padding: 60px;
`;

const StepWrap = styled.div`
  margin-top: 60px;
  width: 50vw;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 40px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

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

export default function DiagnosisForm() {

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
    <Wrap>
      <StepWrap>
        <StepComponents />
      </StepWrap>
      <StyledForm name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Col span={20}>
          <StyledFormItem name={['user', 'Diagnosis area']} label="Diagnosis area" rules={[{ required: true }]}>
            <Input />
          </StyledFormItem>
        </Col>
        <StyledFormItem name={['user', 'medical-history']} label="medical-history">
          <Checkbox.Group options={medicalHistoryArr} onChange={onChange} />
        </StyledFormItem>
        <Col span={15}>
          <StyledFormItem name={['user', 'present-Hx']} label="present-Hx">
            <Checkbox.Group options={presentHxArr} onChange={onChange} />
          </StyledFormItem>
          <StyledFormItem name={['user', 'Heart-Problem']} label="Heart-Problem">
            <Input />
          </StyledFormItem>
          <StyledFormItem name={['user', 'Facial Trouma Hx']} label="Facial Trouma Hx">
            <Input />
          </StyledFormItem>
          <StyledFormItem name={['user', 'Medication']} label="Medication">
            <Input />
          </StyledFormItem>
        </Col>
        <StyledFormItem name={['user', 'Detail Diagnosis']} label="Detail Diagnosis">
          <TextArea showCount maxLength={100} style={{ height: 150 }} />
        </StyledFormItem>
        <StyledFormItem name={['user', 'Picture']} label="Picture">
          <UpLoad/>
        </StyledFormItem>
        <StyledFormItem>
          <StyledButton type="primary" htmlType="submit">
            submit
          </StyledButton>
        </StyledFormItem>
      </StyledForm>
    </Wrap>
  );
}
