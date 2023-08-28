
import Title from '@/pages/PortalPage/component/Title';
import './index.less';

interface LTextTitleRImg {
    title: string;
    img: string;
    list: Array<{ title: string; desc: string; }>;
}

// 左标题+描述，右图
const LTextTitleRImg = (props: LTextTitleRImg) => {

    const { title, img, list } = props;

    return (
        <div className='lTextTitleRImg-wrap'>
            {title && <Title>{title}</Title>}
            <div className='lTextTitleRImg-thought left'>
                <div className='thought-content'>
                    {
                        list.map(item => {
                            return (
                                <div className='thought-content-item'>
                                    <div className='item-title'>{item.title}</div>
                                    <div className='item-desc' dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </div>
                            );
                        })
                    }
                </div>
                {
                    img && (
                        <div style={{ width: '50%' }} className='right'>
                            {/* <img src="https://bitsun-website.oss-cn-shanghai.aliyuncs.com/img/product/val.png" /> */}
                            <img src={img} style={{ width: '100%' }} />
                        </div>
                    )
                }

            </div>
        </div>
    );

};

export default LTextTitleRImg;