import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Search.style';
import { PatientTableInfo } from '../../../model/patient';
import { UserOutlined } from '@ant-design/icons';

interface ListProps {
  list: PatientTableInfo;
}

const ContainerHeight = 350;

const SearchList = ({ list }: ListProps) => {
  //TODO : array type props로 수정
  console.log(list);
  const navigate = useNavigate();

  return (
    <S.StyledList>
      <VirtualList data={[list]} height={ContainerHeight} itemHeight={41} itemKey="email">
        {(item: PatientTableInfo) => (
          <S.ListItem key={item.id.value} onClick={() => navigate('/patient/diagnosis-form')}>
            <List.Item.Meta
              avatar={<Avatar size="large" icon={<UserOutlined />} />}
              title={<div>{item.full_name.value}</div>}
            />
            <div>Content</div>
          </S.ListItem>
        )}
      </VirtualList>
    </S.StyledList>
  );
};

export default SearchList;
