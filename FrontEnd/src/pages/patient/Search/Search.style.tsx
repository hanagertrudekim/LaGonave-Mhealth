import { List } from 'antd';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Searchbar = styled.div`
  width: 65vw;
  margin-top: 100px;
  padding: 50px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;

export const PatientListWrap = styled.div`
  width: 65vw;
  margin-top: 40px;
  border: 1px solid #d9d9d9;
`;

export const StyledList = styled(List)`
  padding: 30px;
`;

export const ListItem = styled(List.Item)`
  padding: 13px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;
