/*
 * @Description: 
 * @Author: longwei
 * @Date: 2022-08-11 16:08:10
 * @LastEditors: longwei
 * @LastEditTime: 2022-09-30 17:32:46
 */
import MyEditor from "@/components/MyEditor";
import { Typography } from "antd";
import { useState } from "react";
import format from 'xml-formatter';

const { Paragraph } = Typography;

// 富文本编辑页面
const myEditorPage = () => {
    const [value, setValue] = useState<string>('hello world');
    console.log(value)
    return (
        <>
            <MyEditor value={value} onChange={setValue} />
            <Typography>
                <Paragraph>
                    <blockquote>{value.replaceAll('<br>', '<br />')}</blockquote>
                    <pre>
                        {/* 解析xml <root><content>一定需要加上,不然解析报错 */}
                        {format(`<root><content>${value}</content>`)}
                    </pre>
                </Paragraph>
            </Typography>
        </>
    )
}

export default myEditorPage;