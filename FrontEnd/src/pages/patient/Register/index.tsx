import React from 'react';
import useStep from '../useStep';
// import { useNavigate } from 'react-router-dom';
import * as S from './Register.style';
import { REGISTER_VALIDATE_MESSAGE } from '../../../constant/validateMessage';
import CustomForm from '../../../components/common/CustomForm';
import { GENDER_OPTION } from '../../../constant';
import usePatientMutation from '../usePatientMutation';
// import { PatientInfo } from '../../../model/patient';

export default function RegisterForm() {
  const { StepComponents } = useStep();
  const { registerPatient } = usePatientMutation();

  return (
    <S.Wrap>
      <S.StepWrap>
        <StepComponents />
      </S.StepWrap>
      <CustomForm
        name="nest-messages"
        onFinish={registerPatient}
        validateMessages={REGISTER_VALIDATE_MESSAGE}
      >
        <S.InputWrap label="name">
          <CustomForm.Input
            name="last_name"
            placeholder="last name"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', margin: '0px 8px 0px 0px' }}
          />
          <CustomForm.Input
            name="first_name"
            placeholder="first name"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', margin: '0px 8px 0px 0px' }}
          />
        </S.InputWrap>

        <CustomForm.Input
          name="birth_date"
          label="Date of Birth"
          placeholder="YYYY/MM/DD"
          colunms={10}
          rules={[{ required: true }]}
        />
        <CustomForm.Radio
          name="gender"
          label="Gender"
          radioValue={GENDER_OPTION}
          rules={[{ required: true }]}
        />

        <S.InputWrap>
          <CustomForm.Input
            label="height"
            name="height"
            colunms={15}
            style={{ display: 'inline-block', margin: '0px 8px 0px 0px' }}
          />
          <CustomForm.Input
            label="weight"
            name="weight"
            colunms={15}
            style={{ display: 'inline-block', margin: '0px 8px 0px 0px' }}
          />
        </S.InputWrap>

        <CustomForm.Input
          name="phone"
          label="Phone Number"
          colunms={17}
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        />
        <CustomForm.Input
          name="recorder_id"
          label="Recorder id"
          colunms={18}
          rules={[{ required: true }]}
        />
        <S.ButtonWrap>
          <CustomForm.Button htmlType="submit">submit</CustomForm.Button>
        </S.ButtonWrap>
      </CustomForm>
    </S.Wrap>
  );
}
