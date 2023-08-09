import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'lzengp.top',
    defaultMessage: 'lzengp.top',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '关于我',
          title: '关于我',
          href: '/personal',
          blankTarget: true,
        },
        {
          key: '模块化页面体验',
          title: '模块化页面体验',
          href: '/myModularization',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Lzengp',
          blankTarget: true,
        },
        {
          key: '粤ICP备2023077596号',
          title: '粤ICP备2023077596号',
          href: 'https://tsm.miit.gov.cn/',
          blankTarget: true,
        },
        {
          key: '粤ICP备2023077596号-1',
          title: '粤ICP备2023077596号-1',
          href: 'https://tsm.miit.gov.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
