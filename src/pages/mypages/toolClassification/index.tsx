import MyGiscus from "@/components/MyGiscus";
import PaginationCard from "@/components/PaginationCard";
import { Divider, List } from "antd";
import BlogData from "./BlogData";
import BookmarkLinkUrl from "./BookmarkLinkUrl";
import FontendData from "./FontendData";
import styles from './index.less';
import ToolData from "./ToolData";

const ToolClassification = () => {

    return (
        <div className={styles.toolClassificationWrap}>
            <div style={{ width: '100%', height: '60px', lineHeight: '60px', textAlign: 'center' }}>
                <h2>微书签</h2>
            </div>
            <div className={styles.content}>
                <Divider orientation="left"> <h2>工具</h2></Divider>
                <PaginationCard dataSource={ToolData} />
                <Divider orientation="left"><h2>博客</h2></Divider>
                <PaginationCard dataSource={BlogData} />
                <Divider orientation="left"><h2>前端技术</h2></Divider>
                <PaginationCard dataSource={FontendData} />
                <Divider orientation="left"><h2>书签链接</h2></Divider>
                <div style={{ maxHeight: '500px', overflow: 'auto', marginBottom: '20px' }}>
                    <List
                        bordered
                        itemLayout="horizontal"
                        dataSource={BookmarkLinkUrl}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a onClick={(e) => { e.stopPropagation(); window.open(item.url); }}>{index + 1}、{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <MyGiscus />
            </div>

        </div>
    );

};

export default ToolClassification;