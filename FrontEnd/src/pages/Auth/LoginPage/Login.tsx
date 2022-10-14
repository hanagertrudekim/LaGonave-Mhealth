import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 510;
  height: 735;
`

const TItleWrap = styled.div`
  margin-bottom: 119px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  color: #444b59;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const InputLabel = styled.label`
  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #444b59;
  margin-bottom: 12px;
`;
  
const Input = styled.input`
  padding: 5px 50px 5px 30px;
  gap: 10px;
  width: 213px;
  height: 32px;
  background: #ffffff;
  border: 2px solid #789ade;
  border-radius: 50px;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 33px;
  letter-spacing: 0.1em;
  &::placeholder {
    color: #c8d3f9;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 55px;
  background: #8699da;
  box-shadow: 4px 8px 12px rgba(78, 99, 141, 0.06), inset 0px 4px 12px rgba(200, 211, 249, 0.6);
  border-radius: 80px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin-top: 110px;
  cursor: pointer;
`;


export default function Login() {

 const {
   register,
   handleSubmit,
 } = useForm();

  return (
    <Wrap>
      <Content>
        <TItleWrap>
          <Title>M-HEALTH</Title>
        </TItleWrap>
        <Form onSubmit={handleSubmit((res) => res)}>
          <InputLabel>User Id</InputLabel>
          <Input {...register('id', { required: true })} />
          <InputLabel>Password</InputLabel>
          <Input {...register('password', { required: true })} />
        </Form>
        <Button type="submit">Log in</Button>
      </Content>
    </Wrap>
  );
}
