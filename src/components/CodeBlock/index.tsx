/*
 * @Description: 
 * @Author: longwei
 * @Date: 2022-10-09 09:44:11
 * @LastEditors: longwei
 * @LastEditTime: 2022-10-09 13:49:32
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
          style={vscDarkPlus} // 这个就是你代码高亮的样式，颜色类的
          // language={match[1]}
          language='tsx' // 你需要的类型，比如url、JavaScript等
          PreTag="div"
          children={String(children).replace(/\n$/, '')} // 代码块儿内容
          showLineNumbers={true} // 这个是显示不显示左侧的行数
          wrapLines={true}        //确定每行代码是否应该包装在父元素中
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
