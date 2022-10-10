import ProCardCode from '@/components/ProCardCode';
import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useEffect, useState } from 'react';
import { code } from './code';

const navTitlesList = new Array(10).fill('标题名称');
const ResizeTitle = () => {
  const [navTitles, setNavTitles] = useState<any>(navTitlesList);
  const [dropdownTitles, setDropdownTitles] = useState<any>([]);

  const menu = (
    <Menu>
      {dropdownTitles.map((item: string) => (
        <Menu.Item>{item}</Menu.Item>
      ))}
    </Menu>
  );

  const resizeWindow = () => {
    const vWidth = document.body.clientWidth;
    const currentWidth = vWidth < 1200 ? 1200 : vWidth;
    const showTitleNum = Math.floor((currentWidth - 500) / 100);
    setNavTitles(navTitles.slice(0, showTitleNum));
    setDropdownTitles(navTitles.slice(showTitleNum));
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', () => resizeWindow());
    return () => {
      window.removeEventListener('resize', () => resizeWindow());
    };
  }, []);

  return (
    <>
      <div style={{ display: 'flex', minWidth: '1200px' }}>
        <Space size={30}>
          {navTitles.map((item: string) => {
            return <>{item}</>;
          })}
          {dropdownTitles && dropdownTitles.length ? (
            <Dropdown overlay={menu}>
              <EllipsisOutlined style={{ fontSize: '20px', fontWeight: 600 }} />
            </Dropdown>
          ) : null}
        </Space>
      </div>
      <ProCardCode code={code} />
    </>
  );
};

export default ResizeTitle;
