import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

export const GridWrap = styled(Form.Item)<{ gridColumns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
`;

export const FormItem = styled(Form.Item)`
  padding-bottom: 9px;
`;

export const StyledInput = styled(Input)``;

export const StyledButton = styled(Button)``;
