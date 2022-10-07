// @ts-ignore
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Markdown from 'react-markdown';

interface CodeBlockProps {
  children: any;
}

const CodeBlock = (props: CodeBlockProps) => {
  const { children } = props;

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={coy}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
    // 自定义标签属性
    h3(props: any) {
      // @ts-ignore
      return <h3 style={{ color: 'red' }} {...props} />;
    },
  };

  return (
    <div
      style={{
        border: '1px solid #f0f2f5',
        padding: '20px',
        borderRadius: '5px',
      }}
    >
      <Markdown
        // source={md}
        children={children}
        components={components}
      />
    </div>
  );
};

export default CodeBlock;
