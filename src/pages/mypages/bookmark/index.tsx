import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Input, Drawer, Tabs, DatePicker, Switch, Space, Tag } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormSwitch, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import { rule, addRule, updateRule, removeRule } from './service';
import type { TableListItem, TableListPagination } from './data';
import request from 'umi-request';
import { ProList } from '@ant-design/pro-components';
import TypeTable from './components/TypeTable';
import ContextTable from './components/ContextTable';
import BookmarkBlockTable from './components/BookmarkBlockTable';

const { TabPane } = Tabs;

const TableList: React.FC = () => {





  return (
    <PageContainer>
      <Tabs defaultActiveKey='1'>
        <TabPane key='1' tab='书签分类'>
          <TypeTable />
        </TabPane>
        <TabPane key='2' tab='书签内容'>
          <ContextTable />
        </TabPane>
        <TabPane key='3' tab='书签块'>
          <BookmarkBlockTable />
        </TabPane>
      </Tabs>
    </PageContainer>
  );
};

export default TableList;
