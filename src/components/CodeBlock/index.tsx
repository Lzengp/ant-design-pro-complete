/*
 * @Description: 
 * @Author: longwei
 * @Date: 2022-10-09 09:44:11
 * @LastEditors: longwei
 * @LastEditTime: 2022-10-09 11:34:36
 */
// @ts-ignore
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { coy, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          showLineNumbers={true}
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
    <Markdown children={children} components={components} />
  );
};

export default CodeBlock;
