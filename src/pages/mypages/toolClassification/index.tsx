import MyGiscus from "@/components/MyGiscus";
import PaginationCard from "@/components/PaginationCard";
import { Divider, Tree } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { request } from "umi";
import BlogData from "./BlogData";
import BookmarkLinkUrl from "./BookmarkLinkUrl";
import FontendData from "./FontendData";
import styles from './index.less';
import ToolData from "./ToolData";

const { DirectoryTree } = Tree;

const ToolClassification = () => {

    const [lastUpdate, setLastUpdate] = useState<string>();

    const getLastUpdate = () => {
        request("https://api.github.com/repos/Lzengp/ant-design-pro-complete ").then((res: any) => {
            console.log(res.pushed_at);
            setLastUpdate(moment(res.pushed_at).format('YYYY-MM-DD HH:mm:ss'));
        });
    };

    useEffect(() => {
        getLastUpdate();
    }, []);

    const getTreeData = (data: Array<any>): Array<any> => {
       return data.map(item => {
            if (item.children) {
                return {
                    title: item.title,
                    key: item.title,
                    children: getTreeData(item.children),
                };
            }
            if (item.url) {
                return {
                    title: <a onClick={(e) => { e.stopPropagation(); window.open(item.url); }}>{item.title}</a>,
                    key: item.title,
                    isLeaf: true
                };
            }
            return {
                title: item.title,
                key: item.title,
            };
        });
    };

    return (
        <div className={styles.toolClassificationWrap}>
            <div style={{ width: '100%', height: '60px', lineHeight: '60px', textAlign: 'center' }}>
                <h2>微书签</h2>
            </div>
            <div className={styles.content}>
                <Divider orientation="left"> <h2>工具</h2></Divider>
                <PaginationCard dataSource={ToolData} />
                <Divider orientation="left"><h2>博客</h2></Divider>
                <PaginationCard dataSource={BlogData} btnName="进去看看"/>
                <Divider orientation="left"><h2>前端技术</h2></Divider>
                <PaginationCard dataSource={FontendData} />
                <Divider orientation="left"><h2>书签链接</h2></Divider>
                <div>
                    {/* <List
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
                    /> */}
                    <DirectoryTree
                        selectable={false}
                        // multiple
                        defaultExpandAll
                        treeData={getTreeData(BookmarkLinkUrl)}
                        rootStyle={{ background: '#f2f4f2', border: '1px solid #f2f4f2', maxHeight: '500px', overflow: 'auto', }}
                    />
                </div>
                <Divider orientation="left"><h2>评论</h2></Divider>
                <MyGiscus />
                {lastUpdate && <Divider orientation="left">最后修改时间：{lastUpdate}</Divider>}
            </div>
        </div>
    );

};

export default ToolClassification;