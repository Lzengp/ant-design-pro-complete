import { Button, Col, Row } from 'antd';
import GGEditor, { Flow } from 'gg-editor';

import { PageContainer } from '@ant-design/pro-layout';
import EditorMinimap from './components/EditorMinimap';
import { FlowContextMenu } from './components/EditorContextMenu';
import { FlowDetailPanel } from './components/EditorDetailPanel';
import { FlowItemPanel } from './components/EditorItemPanel';
import { FlowToolbar } from './components/EditorToolbar';
import styles from './index.less';
import { useEffect, useRef, useState } from 'react';
import { initData } from './const';

GGEditor.setTrackable(false);

const FlowPage = () => {

  const ref = useRef<any>();

  useEffect(() => {
    const FlowData = JSON.parse(window.localStorage.getItem('FlowData'));
    const data = FlowData || initData;
    setTimeout(() => {
      ref.current.propsAPI.read(data);
    }, 500);
  }, []);

  const getData = () => {
    const FlowData = JSON.parse(window.localStorage.getItem('FlowData'));
    FlowData && ref.current.propsAPI.read(FlowData);
  };

  const saveData = () => {
    const resData = ref.current.propsAPI.save();
    window.localStorage.setItem('FlowData', JSON.stringify(resData));
  };

  const onAfterCommandExecute = (val: any) => {
    console.log('数据', val)
    // setData(val?.command?.snapShot);
  };

  return (
    <PageContainer content="千言万语不如一张图，流程图是表示算法思路的好方法">
      <Button onClick={getData}>获取缓存数据</Button>
      <Button onClick={saveData}>暂存当前数据</Button>
      <GGEditor className={styles.editor} ref={ref} onAfterCommandExecute={onAfterCommandExecute}>
        <Row className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Flow className={styles.flow} />
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
      </GGEditor>
    </PageContainer>
  );
};

export default FlowPage;