import { Button, Form, Radio } from 'antd';
import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 518px;
  height: 610px;
  padding: 60px 131px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Title = styled.div`
   margin-bottom: 58px;

  /* font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: black;
  margin-bottom: 85px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif; */
`;

export const LogoImg = styled.img`
  width: 250px;
  height: 80px;
`;

export const StyledRadioGroup = styled(Radio.Group)`
  margin-bottom: 18px;
`;

export const StyledRadio = styled(Radio)`
  font-size: 13px;
`;

export const StyledButton = styled(Button)`
  border-color: rgb(255 131 79);
  background: rgb(255 131 79);
  border-radius: 5px;
  margin-top: 80px;
`;

export const StyledInput = styled(Form.Item)`
  margin-bottom: 40px;
`;
