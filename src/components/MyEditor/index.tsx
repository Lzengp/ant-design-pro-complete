import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

interface MyEditorProps {
    value: string;
    onChange: (value: string) => void;
    showHtml?: boolean;
}

function MyEditor(props: MyEditorProps) {
    const { value, onChange, showHtml = false } = props;
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法

    // 编辑器内容
    const [html, setHtml] = useState(value || '');

    // 组件受控
    useEffect(() => {
        if (onChange && typeof onChange === 'function') {
            onChange(html)
        }
    }, [html]);

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            {
                showHtml && (
                    <div style={{ marginTop: '15px' }}>
                        {html}
                    </div>
                )
            }

        </>
    )
}

export default MyEditor