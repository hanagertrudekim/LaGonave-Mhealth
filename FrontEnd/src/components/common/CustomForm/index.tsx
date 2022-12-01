/* eslint-disable react/require-default-props */
import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, CheckboxProps, Col, Form, Input, Radio, Upload } from 'antd';
import React, { ReactNode } from 'react';
import type { UploadFile } from 'antd/es/upload/interface';
import * as S from './CustomForm.style';
import { Rule } from 'antd/lib/form';

interface GridProps {
  label?: string;
  children: ReactNode;
  gridColumns: string;
  rules?: Rule[];
}

interface InputProps {
  label?: string;
  name?: string;
  colunms?: number;
  placeholder?: string;
  rules?: Rule[];
  style?: React.CSSProperties;
}

interface TextAreaProps {
  label: string;
  name: string;
  maxLength?: number;
}

interface RadioProps {
  label: string;
  name: string;
  rules?: Rule[];
  radioValue: string[];
}

interface ButtonProps {
  children: string;
  danger?: boolean;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  htmlType?: 'button' | 'submit' | 'reset';
}


function GridRow({ label, children, gridColumns, rules }: GridProps) {
  return (
    <S.GridWrap label={label} gridColumns={gridColumns} rules={rules}>
      {children}
    </S.GridWrap>
  );
}

function CustomInput({ label, name, colunms, placeholder, rules, style }: InputProps) {
  return (
    <S.FormItem label={label} name={name} rules={rules} style={style}>
      <Col span={colunms}>
        <S.StyledInput placeholder={placeholder} />
      </Col>
    </S.FormItem>
  );
}

function CusctomTextArea({ label, name, maxLength }: TextAreaProps) {
  return (
    <S.FormItem label={label} name={name}>
      <Input.TextArea showCount maxLength={maxLength} />
    </S.FormItem>
  );
}


function CustomCheckbox({
  name,
  children,
  disabled,
}: CheckboxProps) {
  return (
    <S.FormItemCheckbox name={name} valuePropName="checked">
      <Checkbox disabled={disabled}>
        {children}
      </Checkbox>
    </S.FormItemCheckbox>
  );
}

function CustomRadio({ label, name, rules, radioValue }: RadioProps) {
  return (
    <S.FormItem label={label} name={name} rules={rules}>
      <Radio.Group>
        {radioValue.map((res) => {
          return <Radio value={res}>{res}</Radio>;
        })}
      </Radio.Group>
    </S.FormItem>
  );
}

function CustomUpload({ defaultFileList: fileList }: { defaultFileList: UploadFile[] }) {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
}

function CustomButton({ children, danger, icon, onClick, htmlType }: ButtonProps) {
  return (
    <S.FormItem>
      <S.StyledButton
        htmlType={htmlType}
        type="primary"
        danger={danger}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </S.StyledButton>
    </S.FormItem>
  );
}

const CustomForm = Object.assign(Form, {
  GridRow,
  Input: CustomInput,
  TextArea: CusctomTextArea,
  Radio: CustomRadio,
  Upload: CustomUpload,
  Checkbox: CustomCheckbox,
  Button: CustomButton,
});

export default CustomForm;
