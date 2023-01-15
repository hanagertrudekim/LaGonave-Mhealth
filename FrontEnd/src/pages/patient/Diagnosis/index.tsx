import React from 'react';
import {  Checkbox, Col, Input } from 'antd';
import useStep from '../components/common/useStep';
import { useNavigate } from 'react-router-dom';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import TextArea from 'antd/lib/input/TextArea';
import UpLoad from '../../../components/UpLoad';
import * as S from './Diagnosis.style'
import CustomForm from '../../../components/common/CustomForm';

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
    //TODO: post diagnosis Form api
    navigate('/patient/submit-complete');
  };

  // const medicalHistoryArr = ['diabetes', 'Blood-pressure', 'allergy'];
  // const presentHxArr = ['Smoke', 'Drink']

  return (
    <S.Wrap>
      <S.StepWrap>
      <StepComponents />
      </S.StepWrap>
      <CustomForm onFinish={onFinish} validateMessages={validateMessages}>
          
      </CustomForm>
    </S.Wrap>
  );
}
