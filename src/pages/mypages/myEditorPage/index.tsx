/*
 * @Description:
 * @Author: longwei
 * @Date: 2022-08-11 16:08:10
 * @LastEditors: longwei
 * @LastEditTime: 2022-09-30 17:32:46
 */
import MyEditor from '@/components/MyEditor';
import { Button, Input, message, Space, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import format from 'xml-formatter';
import { request, history } from 'umi';

const { Paragraph } = Typography;

interface MyEditorPageProps {
  location: any;
}

// 富文本编辑页面
const myEditorPage = (props: MyEditorPageProps) => {
  const {
    location: {
      query: { id },
    },
  } = props;
  const [value, setValue] = useState<string>('hello world');
  const [title, setTitle] = useState<string>('hello world');

  useEffect(() => {
    if (id) {
      queryData();
    }
  }, [id]);

  const queryData = () => {
    request(`/apiL/article/getArticleById/${id}`).then((res: any) => {
      console.log(res);
      if (res.data) {
        setValue(res.data.content);
        setTitle(res.data.title);
      }
    });
  };

  const save = () => {
    if (id) {
      request(`/apiL/article/updateArticle/${id}`, {
        data: {
          title: title,
          content: value,
        },
        method: 'post',
      }).then((res: any) => {
        message.success('更新成功');
        history.goBack();
      });
    } else {
      request('/apiL/article/addArticle', {
        data: {
          title: title,
          content: value,
          createName: '龙伟',
        },
        method: 'post',
      }).then((res: any) => {
        message.success('新增成功');
        history.push('/myPages/myArticle');
      });
    }
  };

  const renderMyEditor = useMemo(() => {
    return <MyEditor value={value} onChange={setValue} />;
  }, [value]);

  return (
    <>
      <div className="typed"></div>
      <Space style={{ marginBottom: '20px' }}>
        标题：
        <Input
          value={title}
          placeholder="请输入标题"
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <Button type="primary" onClick={save}>
          {id ? '更新' : '保存'}
        </Button>
      </Space>
      {renderMyEditor}
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
  );
};

export default myEditorPage;
