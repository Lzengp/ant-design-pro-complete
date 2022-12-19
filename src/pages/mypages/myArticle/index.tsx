import { FormatTime, TimeToText } from '@/pages/utils';
import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MoreOutlined,
  PlusOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Input, Menu, message, Modal, Popconfirm, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import classNames from 'classnames';
import { debounce, isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { request, history } from 'umi';
import styles from './index.less';

interface ArticleProps {
  id: string;
  title: string;
  content: string;
  createName: string;
  modifyTime: string;
}

interface CommentProps {
  id: string;
  comments: string;
  createTime: string;
  createName: string;
  articleId: string;
}

const initData = [
  {
    content: '<p>我新增的文章，不错不错</p>',
    id: '16',
    title: '我的文章',
    createName: '龙伟',
    createTime: '2022-12-18T00:35:09',
    modifyTime: '2022-12-18T00:35:09',
  },
];

const initCommentData = [
  {
    id: '16',
    createName: '龙伟',
    createTime: '2022-12-19T00:35:09',
    comments: '评论回复222',
    articleId: '16',
  },
  {
    id: '17',
    createName: '龙四',
    createTime: '2022-12-18T09:35:09',
    comments: '评论回复1111',
    articleId: '17',
  },
];

const MyArticle = () => {
  const [data, setData] = useState<Array<ArticleProps>>([...initData]);
  const [selectData, setSelectData] = useState<ArticleProps>(initData[0]);
  const [fullScreenFlag, setFullScreenFlag] = useState<boolean>(false);
  const [commentData, setCommentData] = useState<Array<CommentProps>>([...initCommentData]);
  const [textArea, setTextArea] = useState<string>(); // 回复输入框
  const [editTextArea, setEditTextArea] = useState<string>(); // 修改输入框
  const [editId, setEditId] = useState<string>(); // 编辑标识，评论id

  const queryData = () => {
    request('/apiL/article/getArticle').then((res: any) => {
      if (Array.isArray(res.data) && res.data.length) {
        setData(res.data);
        setSelectData(res.data[0]);
      }
    });
  };

  useEffect(() => {
    if (selectData) {
      queryComments();
    }
  }, [selectData]);

  const queryComments = () => {
    request(`/apiL/comment/getComments/${selectData?.id}`).then((res: any) => {
      if (Array.isArray(res.data) && res.data.length) {
        setCommentData(res.data);
      } else {
        setCommentData([]);
      }
    });
  };

  // 初始化查询所有文章
  useEffect(() => {
    queryData();
  }, []);

  const moreAction = (e: any) => {
    e.stopPropagation();
  };

  const editArticle = (id: string) => {
    // 跳转到富文本编辑页面
    history.push({
      pathname: '/myPages/myEditor',
      query: {
        id,
      },
    });
  };

  const deleteArticle = (id: string) => {
    // 弹窗提示
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定删除吗?',
      onOk() {
        request(`/apiL/article/deleteArticleById/${id}`, {
          method: 'delete',
        }).then((res: any) => {
          message.success(`删除成功`);
          queryData();
        });
      },
    });
  };

  const overlayMenu = (id: string) => {
    return (
      <Menu style={{ width: '100px' }}>
        <Menu.Item onClick={() => editArticle(id)}>
          <EditOutlined style={{ marginRight: '10px' }} />
          编辑
        </Menu.Item>
        <Menu.Item onClick={() => deleteArticle(id)}>
          <DeleteOutlined style={{ marginRight: '10px' }} />
          删除
        </Menu.Item>
      </Menu>
    );
  };
  const newAddArticle = () => {
    history.push('/myPages/myEditor');
  };

  const searchArticle = (e: any) => {
    if (e.target.value) {
      request(`/apiL/article/searchTitle/${e.target.value}`).then((res: any) => {
        if (Array.isArray(res.data) && res.data.length) {
          setData(res.data);
          setSelectData(res.data[0]);
        }
      });
    } else {
      queryData();
    }
  };

  // 全屏
  const fullScreen = () => {
    const dom = document.getElementById('rightContent') as any;
    setFullScreenFlag(true);
    if (dom?.requestFullscreen) {
      dom.requestFullscreen();
    } else if (dom?.mozRrequestFullScreen) {
      dom.mozRrequestFullScreen();
    } else if (dom?.webkitRequestFullScreen) {
      dom.webkitRequestFullScreen();
    }
  };

  // 退出全屏
  const exitFullScreen = () => {
    setFullScreenFlag(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // @ts-ignore
    } else if (document.mozCancelFullScreen) {
      // @ts-ignore
      document.mozCancelFullScreen();
      // @ts-ignore
    } else if (document.webkitExitFullscreen) {
      // @ts-ignore
      document.webkitExitFullscreen();
    }
  };

  const textAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  // 回复
  const reply = () => {
    request('/apiL/comment/addComment', {
      data: {
        comments: textArea,
        createName: '龙伟',
        articleId: selectData?.id,
      },
      method: 'post',
    }).then((res: any) => {
      queryComments();
      setTextArea('');
    });
  };

  // 删除评论
  const deleteComment = (id: string) => {
    request(`/apiL/comment/deleteCommentById/${id}`, {
      method: 'delete',
    }).then((res: any) => {
      message.success('删除成功');
      queryComments();
    });
  };

  // 修改评论
  const editComment = (item: CommentProps) => {
    setEditId(item.id);
    setEditTextArea(item.comments);
  };

  // 提交修改评论
  const commitEditComment = () => {
    request(`/apiL/comment/updateComment/${editId}`, {
      data: {
        comments: editTextArea,
      },
      method: 'post',
    }).then((res: any) => {
      queryComments();
      setEditId('');
      message.success('更新成功');
    });
  };

  return (
    <div className={styles.myArticleWarp}>
      {/* 左侧文章目录 */}
      <div className={styles.leftTitle}>
        <div className={styles.catalogue}>
          目录
          <Input
            placeholder="搜索"
            onChange={debounce(searchArticle, 500)}
            style={{ width: '220px', marginLeft: '10px', borderRadius: '4px' }}
          />
          <PlusOutlined title="新增文章" className={styles.newAddArticle} onClick={newAddArticle} />
        </div>
        {data.map((item: ArticleProps) => {
          return (
            <div
              className={classNames(
                styles.titleWrapper,
                selectData?.id === item.id && styles.selectTitleWrapper,
              )}
              onClick={() => setSelectData(item)}
            >
              {item.title}
              {/* <div className={styles.moreIcon} onClick={moreAction}>
                <MoreOutlined />
              </div> */}

              <div className={styles.moreIcon} onClick={moreAction}>
                <Dropdown overlay={() => overlayMenu(item.id)} trigger={['click']}>
                  <MoreOutlined />
                </Dropdown>
              </div>
            </div>
          );
        })}
      </div>
      {/* 右侧文章主题 */}
      <div className={styles.rightContent}>
        <div id="rightContent" style={{ minHeight: '500px', background: '#FFF' }}>
          <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
            {!fullScreenFlag && (
              <FullscreenOutlined onClick={fullScreen} style={{ fontSize: '16px' }} />
            )}
            {fullScreenFlag && (
              <FullscreenExitOutlined onClick={exitFullScreen} style={{ fontSize: '16px' }} />
            )}
          </div>
          <div className={styles.title}>{selectData?.title || ''}</div>
          <div dangerouslySetInnerHTML={{ __html: selectData?.content || '' }}></div>
        </div>
        <Space style={{ color: '#c1c1c1' }}>
          <Space>
            <UserDeleteOutlined />
            {selectData.createName}
          </Space>
          <Space style={{ marginLeft: '20px' }}>
            <ClockCircleOutlined />
            {selectData.modifyTime ? FormatTime(selectData.modifyTime) : ''}
          </Space>
        </Space>
        {!isEmpty(commentData) && (
          <div>
            <div className={styles.commentsTotal}>所有评论({commentData.length})</div>
            {commentData.map((item: CommentProps) => {
              return (
                <div className={styles.avatarAndComment}>
                  <Avatar
                    style={{ marginTop: '0px', marginRight: '10px' }}
                    size="large"
                    src={`https://picsum.photos/300/150/?image=${Math.ceil(Math.random() * 100)}`}
                  />
                  <div>
                    <div>
                      {item.createName}
                      <span style={{ color: '#8A8F8D', marginLeft: '10px' }}>
                        {TimeToText(item.createTime)} {FormatTime(item.createTime, 'HH:mm')}
                      </span>
                    </div>
                    {editId == item.id ? (
                      <div style={{ marginTop: '10px' }}>
                        <TextArea
                          value={editTextArea}
                          rows={3}
                          style={{ width: '500px' }}
                          onChange={(e) => setEditTextArea(e.target.value)}
                        />
                        <div style={{ marginTop: '10px' }}>
                          <Button type="primary" onClick={commitEditComment}>
                            提交
                          </Button>
                          <Button type="link" onClick={() => setEditId('')}>
                            取消
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ paddingTop: '8px' }}>{item.comments}</div>
                    )}
                    <Space style={{ marginTop: '6px' }}>
                      <EditOutlined
                        className={styles.operateCommentIcon}
                        onClick={() => editComment(item)}
                      />
                      <Popconfirm title="确认删该评论么？" onConfirm={() => deleteComment(item.id)}>
                        <DeleteOutlined className={styles.operateCommentIcon} />
                      </Popconfirm>
                    </Space>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div>
          <div style={{ display: 'flex', margin: '20px 0' }}>
            <Avatar
              style={{ marginTop: '0px', marginRight: '10px' }}
              size="large"
              src={`https://picsum.photos/300/150/?image=${Math.ceil(Math.random() * 100)}`}
            />
            <TextArea
              value={textArea}
              rows={3}
              style={{ width: '500px' }}
              onChange={textAreaChange}
            />
          </div>
          <Button
            type="primary"
            style={{ marginLeft: '50px', borderRadius: '6px' }}
            onClick={reply}
          >
            回复
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyArticle;
