

import { useEffect, useState } from 'react';
import styles from './index.less';
import { isMobileDevice } from '@/pages/utils';

let timer: any;

const Sentence = {
    1: '从前从前 有个人爱你很久',
    2: '但偏偏 风渐渐 把距离吹得好远',
    3: '好不容易 又能再多爱一天',
    4: '但故事的最后 你好像还是说了 拜拜',

};

const LuminousFont = () => {

    const [num, setNum] = useState<number>(1);
    const [show, setShow] = useState<boolean>(true);

    const begin = () => {
        timer = setInterval(() => {
            setNum((num: number) => {
                if (num === 4) {
                    return 1;
                }
                return num + 1;
            });
        }, 9000);
    };

    useEffect(() => {
        begin();
        return () => {
            timer && clearInterval(timer);
        };
    }, []);

    const close = () => {
        if (show) {
            timer && clearInterval(timer);
        } else {
            begin();
        }
        setShow(!show);
    };

    return (
        <div className={styles.luminousFont}>
            {/* <div className={styles.close} onClick={close}>{show ? '关闭播放' : '开启播放'}</div> */}
            {show && <div className={styles.content} style={{ left: isMobileDevice() ? '24%' : '43%' }} data-before={Sentence[num]}>{Sentence[num]}</div>}
        </div>
    );
};

export default LuminousFont;