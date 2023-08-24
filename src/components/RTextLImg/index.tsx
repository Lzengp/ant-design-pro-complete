
import Title from '@/pages/PortalPage/component/Title';
import './index.less';
import { Col, Row } from 'antd';

interface LTextRImg {
    title: string;
    img: string;
    list: Array<string>;
}

// 左图右字
const LTextRImg = (props: LTextRImg) => {

    const { title, img, list } = props;

    return (
        <div className="lTextRImg-wrap">
            <Title title={title} />
            <Row className={'lTextRImg-content'} gutter={24}>
                <Col span={12} className='lTextRImg-text'>
                    {list?.map(item => <div style={{ textIndent: '3em' }}>{item}</div>)}
                </Col>
                <Col span={12}>
                    <img src={img} style={{ width: '100%' }} />
                </Col>
            </Row>
        </div>
    );

};

export default LTextRImg;