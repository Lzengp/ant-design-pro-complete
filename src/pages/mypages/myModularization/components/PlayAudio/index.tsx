import ProCardCode from '@/components/ProCardCode';
import { Button, Input, Modal } from 'antd';
import { useState } from 'react';
import { code } from './code';

const PlayAudio = () => {
  const [url, setUrl] = useState<string>(
    'https://img.tukuppt.com/newpreview_music/08/99/12/5c88e2b921f016633.mp3',
  );
  const play = () => {
    Modal.warning({
      title: '提示信息',
      content: '音频播放中',
      okText: '确定',
    });
    var mp3Url = url || 'https://img.tukuppt.com/newpreview_music/08/99/12/5c88e2b921f016633.mp3';
    var player = new Audio(mp3Url);
    player.play();
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        请输入需要播放的音频链接：
        <Input
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          style={{ width: '600px' }}
        />
      </div>
      <Button onClick={play}>播放警告音频</Button>
      <ProCardCode code={code} />
    </>
  );
};

export default PlayAudio;
