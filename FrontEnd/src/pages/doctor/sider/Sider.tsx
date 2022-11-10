import { ControlOutlined, FileAddOutlined, SaveOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import React from 'react'
import * as S from './Sider.styled'


export default function Sider() {
  const { Sider } = Layout;
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[])
    : MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Diagnosis', 'sub1', <FileAddOutlined />, [getItem('New Diagnosis', '1'), getItem('history', '2')]),
    getItem('Patients', '3', <UserOutlined />),
    getItem('Admin', 'sub2', <ControlOutlined />, [getItem('Form', '4'), getItem('patient information', '5')]),
    getItem('information', '6', <SaveOutlined />),
  ];

  return (
    <S.SiderWrap>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width="250px"
      >
        <S.Logo className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
    </S.SiderWrap>
  );
}
