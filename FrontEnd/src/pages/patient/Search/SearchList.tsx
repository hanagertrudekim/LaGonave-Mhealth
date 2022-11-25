import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PatientTableInfo } from '../../../model/patient';

const StyledList = styled(List)`
  padding: 30px;
`;

const ContainerHeight = 350;

const SearchList = (list: PatientTableInfo[]) => {
  return (
    <StyledList>
      <VirtualList data={list} height={ContainerHeight} itemHeight={41} itemKey="email">
        {(item: PatientTableInfo) => (
          <List.Item key={item.id.value}>
            <List.Item.Meta
              avatar={<Avatar />}
              title={<a href="https://ant.design">{item.full_name.value}</a>}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </StyledList>
  );
};

export default SearchList;
