

import { useEffect, useState } from 'react';
import styles from './index.less';

let timer: any;

const Sentence = {
    1: '从前从前 有个人爱你很久',
    2: '但偏偏 风渐渐 把距离吹得好远',
    3: '好不容易 又能再多爱一天',
    4: '但故事的最后 你好像还是说了 拜拜',

};

const LuminousFont = () => {

    const [num, setNum] = useState<number>(1);

    useEffect(() => {
        timer = setInterval(() => {
            setNum((num: number) => {
                console.log('内存', num);
                if (num === 4) {
                    return 1;
                }
                return num + 1;
            });
        }, 9000);

        return () => {
            timer && clearInterval(timer);
        };
    }, []);

    console.log('外层', num);

    return (
        <div className={styles.luminousFont}>
            <div className={styles.content} data-before={Sentence[num]}>{Sentence[num]}</div>
        </div>
    );
};

export default LuminousFont;