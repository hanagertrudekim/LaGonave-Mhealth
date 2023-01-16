import { Form, Spin } from 'antd';
import React, { useState, Suspense } from 'react';
import CustomForm from '../../../components/common/CustomForm';
import * as S from './SearchPatient.style';
import SearchList from './components/SearchList';
import { useGetPatientsQuery } from '../../../store/api/patient';

export default function SearchPatient() {
  const [number, setNumber] = useState < number | null >(null);

  const onFinish = (values: number) => {
    setNumber(values);
  };
// 검색 쿼리 요청이 안가는 이슈.. 해결해야함
  const { data: patientList } = useGetPatientsQuery(number);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {patientList && (
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
              <SearchList list={patientList} />
            </Suspense>
          </S.PatientListWrap>
        </S.Wrap>
      )}
    </>
  );
}
