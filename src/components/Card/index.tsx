import { Button, Card } from "antd";
import styles from './index.less';

export interface MyCardProps {
    logo: string;
    title: string;
    url: string;
    description: string;
}

const MyCard = (props: MyCardProps) => {

    const { logo, title, url, description } = props;

    return (
        <div className={styles.myCardWrap}>
            <Card
                key={url}
                title={<div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} style={{ height: '50px', marginRight: '10px' }} alt="图标" />
                    <h3><a target="_blank" href={url} title="chatgpt在线" style={{ color: '#000000' }}>{title}</a></h3>
                </div>}
                hoverable
            >
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
                        <div style={{marginRight: '10px', color: '#999' }}>{description}</div>
                        <Button onClick={() => { window.open(url); }}>立即体验</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MyCard;