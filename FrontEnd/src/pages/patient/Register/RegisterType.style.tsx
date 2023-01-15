import { Button, Radio } from 'antd';
import styled from 'styled-components';

export const Wrap = styled.div`
  @import '~antd/dist/antd.css';
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 518px;
  height: 610px;
  padding: 80px 100px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: black;
  margin-bottom: 100px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
`;

export const StyledButton = styled(Button)`
  background: #0078f0;
  width: 70px;
  height: 35px;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 20px;
  position: absolute;
  right: 0;
`;

export const StyledRadio = styled(Radio)`
  margin-bottom: 35px;
  font-family: 'Noto Sans', sans-serif;
  span {
    font-size: 15px;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;
