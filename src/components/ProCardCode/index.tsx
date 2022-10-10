import ProCard from '@ant-design/pro-card';
import CodeBlock from '../CodeBlock';

interface ProCardCodeProps {
  code: string;
  title?: string;
}

const ProCardCode = (props: ProCardCodeProps) => {
  const { code, title = '代码' } = props;
  return (
    <ProCard title={title} headerBordered collapsible defaultCollapsed>
      <pre>
        <CodeBlock children={code} />
      </pre>
    </ProCard>
  );
};

export default ProCardCode;
