import React from 'react';
import useStep from '../components/common/useStep';
import { useNavigate } from 'react-router-dom';

import * as S from './Diagnosis.style'
import CustomForm from '../../../components/common/CustomForm';

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
      <CustomForm onFinish={onFinish}>
          
      </CustomForm>
    </S.Wrap>
  );
}
