import { Button, Form } from 'antd';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  width: 45vw;
  height: auto;
  padding: 60px;
`;

export const StepWrap = styled.div`
  margin-top: 60px;
  width: 50vw;
`;

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 40px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
