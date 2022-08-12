import styles from './index.less';
import IconPage from "./components/IconPage";
// import DragVerificationCode from './components/DragVerificationCode';

interface ComponentsProps {
    dom: JSX.Element;
    height?: number;
}

// 模块化页面：不同的模块功能组成的一个大页面，用于一些小功能的展示
const myModularization = () => {

    const componentsList = [
        { dom: <IconPage /> },
        // { dom: <DragVerificationCode />, height: 400 },
    ];

    return (
        <>
            {
                componentsList.map((item: ComponentsProps) => {
                    return (
                        <div className={styles.modularization} style={{ height: `${item.height}px` }}>
                            {item.dom}
                        </div>
                    )
                })
            }
        </>
    )
}

export default myModularization;