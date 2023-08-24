
import Title from '@/pages/PortalPage/component/Title';
import './index.less';

interface TTextBImg {
    title: string;
    img: string | Array<string>;
    list: Array<string>;
    bottomList?: Array<string>;
}

// 上字下图
const TTextBImg = (props: TTextBImg) => {

    const { title, img, list, bottomList } = props;

    return (
        <div className="TTextBImg-wrap">
            <Title title={title} />
            <div className={'TTextBImg-content'} >
                <div className='TTextBImg-text'>
                    {list?.map(item => <div style={{ textIndent: '3em' }}>{item}</div>)}
                </div>
                <div style={{ textAlign: 'center' }}>

                    {
                        typeof img === 'string' && <img src={img} style={{ width: '100%', padding: '20px 0' }} />

                    }
                    {
                        typeof img === 'object' && img.map(item => <img src={item} style={{ width: '100%', padding: '20px 0' }} />)
                    }
                </div>
                <div className='TTextBImg-text'>
                    {bottomList?.map(item => <div style={{ textIndent: '3em' }}>{item}</div>)}
                </div>
            </div>
        </div>
    );

};

export default TTextBImg;