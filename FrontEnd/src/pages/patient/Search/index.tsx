import { Form, Spin } from 'antd';
import React, { useState, Suspense } from 'react';
import CustomForm from '../../../components/common/CustomForm';
import { useGetPatientsQuery } from '../../../store/api/patient';
import * as S from './Search.style';
import SearchList from './SearchList';

export default function SearchPatient() {
  const [number, setNumber] = useState<number | null>(null);

  const { data: patientsData, error, isLoading } = useGetPatientsQuery(number);

  const onFinish = (values: number) => {
    setNumber(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  console.log(patientsData);

  return (
    patientsData && (
      <S.Wrap>
        <S.Searchbar>
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="inline"
          >
            <CustomForm.Input
              label="phone_number"
              name="phone_number"
              style={{ width: '20vw' }}
            ></CustomForm.Input>
            <Form.Item>
              <CustomForm.Button htmlType="submit">Search</CustomForm.Button>
            </Form.Item>
          </Form>
        </S.Searchbar>
        <S.PatientListWrap>
          <Suspense fallback={<Spin />}>
            <SearchList list={patientsData} />
          </Suspense>
        </S.PatientListWrap>
      </S.Wrap>
    )
  );
}
