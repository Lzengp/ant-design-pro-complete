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
import { request, history } from 'umi';
import styles from './index.less';
import { debounce } from 'lodash';

const { Paragraph } = Typography;

interface MyEditorPageProps {
  location: any;
  match: any;
}

// 富文本编辑页面
const myEditorPage = (props: MyEditorPageProps) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [value, setValue] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const isMenuPage = window.location.href.indexOf('myPages') > -1; // 是否为菜单页面

  useEffect(() => {
    if (id && id !== 'create') {
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
    if (!title || !value) {
      return message.error("请输入标题和内容");
    }
    const json = JSON.stringify(value);
    if (id && id !== 'create') {
      request(`/apiL/article/updateArticle/${id}`, {
        data: {
          title,
          content: json,
        },
        method: 'post',
      }).then((res: any) => {
        message.success('更新成功');
        history.push(isMenuPage ? `/myPages/myArticle/${id}` : `/myArticle/${id}`);
      });
    } else {
      request('/apiL/article/addArticle', {
        data: {
          title,
          content: json,
          createName: '龙伟',
        },
        method: 'post',
      }).then((res: any) => {
        message.success('新增成功');
        history.push(isMenuPage ? `/myPages/myArticle/${res.data}` : `/myArticle/${res.data}`);
      });
    }
    return;
  };

  // 实时保存 - 需要有标题
  const realTimeSaving = debounce((val) => {
    let currentTitle = '';
    setTitle(e => {
      currentTitle = e;
      return e;
    });
    if (id && id !== 'create') {
      const json = JSON.stringify(val);
      request(`/apiL/article/updateArticle/${id}`, {
        data: {
          title: currentTitle,
          content: json,
        },
        method: 'post',
      }).then((res: any) => {
        if (!val) {
          message.success('更新成功');
          history.push(isMenuPage ? `/myPages/myArticle/${id}` : `/myArticle/${id}`);
        }
      });
    }
  }, 2000);

  const onChange = (val: string) => {
    setValue(val);
    // realTimeSaving(val);
  };

  const renderMyEditor = useMemo(() => {
    return (
      <MyEditor
        value={value}
        onChange={onChange}
        style={{ top: '72px' }}
        editorStyle={{ overflow: 'auto', height: '80vh' }}
      />);
  }, [value]);

  return (
    <div className={styles.myEditorPageWrap}>
      <Space className={styles.title}>
        标题：
        <Input
          value={title}
          placeholder="请输入标题"
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <Button type="primary" onClick={save}>
          {id && id !== 'create' ? '更新' : '保存'}
        </Button>
        <Button onClick={() => {
          // history.push({
          //   pathname: isMenuPage ? `/myPages/myArticle/${id}` : `/myArticle/${id}`,
          // });
          history.goBack();
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
