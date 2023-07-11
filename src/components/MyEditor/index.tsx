import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { SlateEditor } from '@wangeditor/editor';

interface MyEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  style?: React.CSSProperties;
  editorStyle?: React.CSSProperties;
}

function MyEditor(props: MyEditorProps) {
  const { value, onChange, readOnly = false, style, editorStyle } = props;
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法

  // 编辑器内容
  // const [html, setHtml] = useState(value || '');

  useEffect(() => {
    if (editor && value) {
      setTimeout(() => {
        const endPoint = SlateEditor.end(editor, []);
        editor.select(endPoint);
      }, 500);
    }
  }, [editor]);

  // 组件受控
  // useEffect(() => {
  //     if (onChange && typeof onChange === 'function') {
  //         onChange(value)
  //     }
  // }, [value]);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    placeholder: readOnly ? '暂无内容' : '请输入内容...',
    autoFocus: true,
    readOnly,
    scroll: false
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ zIndex: 100, position: 'relative', ...style }}>
        {
          !readOnly && (
            <Toolbar
              editor={editor}
              defaultConfig={toolbarConfig}
              mode="default"
              style={{ borderBottom: '1px solid #ccc' }}
            />
          )
        }
        <Editor
          defaultConfig={editorConfig}
          value={value}
          onCreated={setEditor}
          onChange={(editor) => onChange && onChange(editor.getHtml())}
          mode="default"
          style={{ ...editorStyle }}
        />
      </div>
    </>
  );
}

export default MyEditor;
