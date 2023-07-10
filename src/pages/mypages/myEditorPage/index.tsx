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
  const [value, setValue] = useState<string>('请输入内容');
  const [title, setTitle] = useState<string>('');
  const isMenuPage = window.location.href.indexOf('myPages') > -1; // 是否为菜单页面

  useEffect(() => {
    if (id) {
      queryData();
    }
  }, [id]);

  const queryData = () => {
    request(`/apiL/article/getArticleById/${id}`).then((res: any) => {
      if (res.data) {
        setValue(JSON.parse(res.data.content));
        setTitle(res.data.title);
      }
    });
  };

  const save = () => {
    if (!title) {
      return message.error("请输入标题");
    }
    const json = JSON.stringify(value);
    if (id) {
      request(`/apiL/article/updateArticle/${id}`, {
        data: {
          title: title,
          content: json,
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
          content: json,
          createName: '龙伟',
        },
        method: 'post',
      }).then((res: any) => {
        message.success('新增成功');
        history.push(isMenuPage ? '/myPages/myArticle' : '/myArticle');
      });
    }
    return;
  };

  const renderMyEditor = useMemo(() => {
    return <MyEditor value={value} onChange={setValue} />;
  }, [value]);

  return (
    <div>
      <Space style={{ margin: '20px' }}>
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
        <Button onClick={() => {
          history.push({
            pathname: isMenuPage ? '/myPages/myArticle' : '/myArticle',
            query: {
              id,
            },
          });
        }}>返回</Button>
      </Space>
      {renderMyEditor}
      {/* 解析xml <root><content>一定需要加上,不然解析报错 */}
      {/* <Typography>
        <Paragraph>
          <blockquote>{value.replaceAll('<br>', '<br />')}</blockquote>
          <pre>
            {format(`<root><content>${value}</content>`)}
          </pre>
        </Paragraph>
      </Typography> */}
    </div>
  );
};

export default myEditorPage;
