import { FormatTime, TimeToText } from '@/pages/utils';
import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GithubOutlined,
  MoreOutlined,
  PlusOutlined,
  SearchOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Input, Menu, message, Modal, Popconfirm, Popover, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import classNames from 'classnames';
import { debounce, isEmpty } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { request, history } from 'umi';
import styles from './index.less';
import MyEditor from '@/components/MyEditor';
import Footer from '@/components/Footer';
import RewriteFooter from '@/components/RewriteFooter';

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
  ip: string;
  photo: string;
}

interface UserProps {
  name: string;
  photo: string;
}

const MyArticle = (props: any) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [data, setData] = useState<Array<ArticleProps>>([]);
  const [selectData, setSelectData] = useState<ArticleProps>();
  const [fullScreenFlag, setFullScreenFlag] = useState<boolean>(false);
  const [commentData, setCommentData] = useState<Array<CommentProps>>([]);
  const [textArea, setTextArea] = useState<string>(); // 回复输入框
  const [editTextArea, setEditTextArea] = useState<string>(); // 修改输入框
  const [editId, setEditId] = useState<string>(); // 编辑标识，评论id
  const [user, setUser] = useState<UserProps>();
  const isMenuPage = window.location.href.indexOf('myPages') > -1; // 是否为菜单页面
  const isAuthor = localStorage.getItem('currentAuthor') === 'longwei';

  const [searchData, setSearchData] = useState<any>();
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false); // 全局搜索popover弹窗

  useEffect(() => {
    if (Array.isArray(data) && id) {
      setSelectData(data.find(d => d.id == id));
      document.querySelector(`#anchorPoint`)?.scrollIntoView({
        behavior: 'smooth', // 平滑过度效果
        block: 'start',
      });
    }
  }, [id, data]);

  // 初始化查询所有文章
  useEffect(() => {
    queryData();
    findUsers();
  }, []);

  const findUsers = () => {
    request(`/apiL/users/findUsers`, {
      method: 'post',
    }).then((res: any) => {
      setUser(res.data);
    });
  };

  const queryData = () => {
    request('/apiL/article/getArticle').then((res: any) => {
      if (id && Array.isArray(res.data) && res.data.length) {
        setData(res.data);
        const currentData = res.data.find((item: any) => item.id === id);
        if (currentData?.id) {
          setSelectData(res.data.filter((item: any) => item.id === id)[0]);
        } else {
          setSelectData(res.data[0]);
          history.replace(`/myArticle/${res.data[0].id}`);
        }
      } else if (Array.isArray(res.data) && res.data.length) {
        setData(res.data);
        setSelectData(res.data[0]);
      } else {
        setData([]);
        setSelectData(undefined);
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


  const moreAction = (e: any) => {
    e.stopPropagation();
  };

  const editArticle = (id: string) => {
    // 跳转到富文本编辑页面
    history.push({
      pathname: isMenuPage ? `/myPages/myEditor/${id}` : `/myEditor/${id}`,
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
    history.push(isMenuPage ? `/myPages/myEditor/create` : '/myEditor/create',);
  };

  const searchArticle = (e: any) => {
    if (e.target.value) {
      request(`/apiL/article/searchTitle/${e.target.value}`).then((res: any) => {
        if (Array.isArray(res.data) && res.data.length) {
          setData(res.data);
          setSelectData(res.data[0]);
        } else {
          setData([]);
          setSelectData(undefined);
        }
      });
    } else {
      queryData();
    }
  };

  const escFunction = (e) => {
    setFullScreenFlag((fullScreenFlag) => !fullScreenFlag);
  };

  useEffect(() => {
    // 监听退出全屏事件 --- chrome 用 esc 退出全屏并不会触发 keyup 事件
    document.addEventListener("webkitfullscreenchange", escFunction); /* Chrome, Safari and Opera */
    document.addEventListener("mozfullscreenchange", escFunction); /* Firefox */
    document.addEventListener("fullscreenchange", escFunction); /* Standard syntax */
    document.addEventListener("msfullscreenchange", escFunction); /* IE / Edge */
    return () => {
      //销毁时清除监听
      document.removeEventListener("webkitfullscreenchange", escFunction);
      document.removeEventListener("mozfullscreenchange", escFunction);
      document.removeEventListener("fullscreenchange", escFunction);
      document.removeEventListener("MSFullscreenChange", escFunction);
    };
  }, []);

  // 全屏
  const fullScreen = () => {
    const dom = document.getElementById('rightContent') as any;
    // setFullScreenFlag(true);
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
    // setFullScreenFlag(false);
    if (document?.exitFullscreen) {
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

  const textAreaChange = (e: any) => {
    setTextArea(e.target.value);
  };

  // 回复
  const reply = () => {
    request('/apiL/comment/addComment', {
      data: {
        comments: textArea,
        createName: user?.name,
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

  const PopoverContent = () => useMemo(() => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '40px', width: '300px' }}>
        {
          searchData?.map((item: any) => {
            return (
              <a target='-blank' onClick={() => {
                history.replace(`/myArticle/${item.id}`);
                setPopoverOpen(false);
              }}>
                {item.title}
              </a>
            );
          })
        }
      </div>
    );
  }, [searchData]);

  const globalSearchChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      request(`/apiL/article/getSearchArticle?content=${value.toString()}`).then((res: any) => {
        if (Array.isArray(res?.data) && res?.data.length) {
          setSearchData(res?.data || []);
          setPopoverOpen(true);
        } else {
          setSearchData([]);
          setPopoverOpen(false);
        }
      });
    } else {
      setSearchData([]);
      setPopoverOpen(false);
    }
  };


  return (
    <div>
      <div
        className={styles.globalSearch}
        onClick={(e: any) => {
          if (e.target.nodeName !== 'INPUT') {
            setPopoverOpen(false);
          }
        }}>
        <Popover
          placement="bottomLeft"
          title={''}
          arrowPointAtCenter={false}
          content={PopoverContent}
          open={popoverOpen}>
          <Input
            placeholder='请输入关键字进行全局搜索'
            style={{ width: '400px', borderRadius: '15px' }}
            prefix={<SearchOutlined />}
            onChange={debounce((e) => globalSearchChange(e), 500)}
            onPressEnter={debounce((e) => globalSearchChange(e), 500)}
            onFocus={(e) => {
              if (searchData && searchData.length) {
                setPopoverOpen(true);
              }
            }}
          />
        </Popover>
      </div>
      <div className={styles.myArticleWarp} onClick={(e) => { e.stopPropagation(); setPopoverOpen(false); }}>
        {/* 左侧文章目录 */}
        <div className={styles.leftTitle}>
          <div className={styles.catalogue}>
            目录
            <Input
              placeholder="搜索"
              onChange={debounce(searchArticle, 500)}
              style={{ width: '220px', marginLeft: '10px', borderRadius: '4px' }}
            />
            {isAuthor && <PlusOutlined title="新增文章" className={styles.newAddArticle} onClick={newAddArticle} />}
          </div>
          <div className={styles.articleTitles}>
            {data.map((item: ArticleProps) => {
              return (
                <div
                  className={classNames(
                    styles.titleWrapper,
                    selectData?.id === item.id && styles.selectTitleWrapper,
                  )}
                  onClick={() => {
                    setSelectData(item);
                    history.replace(`/myArticle/${item.id}`);
                  }}
                >
                  {item.title}
                  {
                    isAuthor && (
                      <div className={styles.moreIcon} onClick={moreAction}>
                        <Dropdown overlay={() => overlayMenu(item.id)} trigger={['click']}>
                          <MoreOutlined />
                        </Dropdown>
                      </div>
                    )
                  }
                </div>
              );
            })}
          </div>
        </div>
        {/* 右侧文章主题 */}
        <div className={styles.rightContent}>
          <div style={{ height: '40px' }} id="anchorPoint"></div>
          <div id="rightContent" style={fullScreenFlag ? { paddingLeft: '50px', background: '#FFF' } : { minHeight: '65vh', background: '#FFF' }}>
            <div style={{ position: 'absolute', right: '20px', top: '20px' }}>
              {!fullScreenFlag && (
                <FullscreenOutlined onClick={fullScreen} style={{ fontSize: '16px' }} />
              )}
              {fullScreenFlag && (
                <FullscreenExitOutlined onClick={exitFullScreen} style={{ fontSize: '16px' }} />
              )}
            </div>
            <div className={styles.title}>{selectData?.title || ''}</div>
            <MyEditor value={selectData?.content ? JSON.parse(selectData?.content) : ''} readOnly={true} editorStyle={fullScreenFlag ? { overflow: 'auto', height: '80vh' } : {}} />
            {/* <div dangerouslySetInnerHTML={{ __html: selectData?.content ? selectData?.content.substr(1, selectData?.content.length - 2) : '' }}></div> */}
          </div>
          <Space style={{ color: '#c1c1c1' }}>
            <Space>
              <UserDeleteOutlined />
              {selectData?.createName}
            </Space>
            <Space style={{ marginLeft: '20px' }}>
              <ClockCircleOutlined />
              {selectData?.modifyTime ? FormatTime(selectData?.modifyTime) : ''}
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
                      src={item?.photo}
                    />
                    <div>
                      <div>
                        {item.createName}
                        <span style={{ color: '#8A8F8D', marginLeft: '10px' }}>
                          {TimeToText(item.createTime)} {FormatTime(item.createTime, 'HH:mm')} {item.ip}
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
                            <Button
                              type="primary"
                              onClick={commitEditComment}
                              disabled={!editTextArea}
                            >
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
                      {
                        // 只有自己的评论才可以修改和删除
                        user?.name === item.createName && (
                          <Space style={{ marginTop: '6px' }}>
                            <EditOutlined
                              className={styles.operateCommentIcon}
                              onClick={() => editComment(item)}
                            />
                            <Popconfirm title="确认删该评论么？" onConfirm={() => deleteComment(item.id)}>
                              <DeleteOutlined className={styles.operateCommentIcon} />
                            </Popconfirm>
                          </Space>
                        )
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div>
            <div style={{ display: 'flex', margin: '20px 0' }}>
              <Avatar style={{ marginTop: '0px', marginRight: '10px' }} size="large" src={user?.photo} />
              <TextArea
                value={textArea}
                rows={3}
                style={{ width: '500px' }}
                onChange={textAreaChange}
              />
            </div>
            <Button
              type="primary"
              style={{ marginLeft: '50px', borderRadius: '6px', marginBottom: '50px' }}
              onClick={reply}
              disabled={!textArea || !selectData?.title}
            >
              回复
            </Button>
          </div>
          <RewriteFooter />
        </div>
      </div>
    </div>
  );
};

export default MyArticle;
