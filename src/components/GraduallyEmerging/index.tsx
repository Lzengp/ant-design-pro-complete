import { useEffect, useState } from "react";
import styles from './index.less';
import classNames from "classnames";

interface GraduallyEmergingProps {
    id: string;
    children: any;
}

const GraduallyEmerging = (props: GraduallyEmergingProps) => {

    const { id, children } = props;

    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const rect: any = document.querySelector(`#${id}`)?.getBoundingClientRect();
            const vHeight = window.innerHeight || document.documentElement.clientHeight;
            console.log((vHeight * 0.7).toFixed(2), rect?.top.toFixed(2));
            if ((vHeight * 0.78) > rect?.top) {
                setStatus(true);
            } else {
                // setStatus(false);
            }

        });
    }, []);


    return (
        <div className={classNames(styles['gradually-emerging-wrap'], status && styles['gradually-emerging-wrap-show'])} id={id}>
            {children}
        </div>
    );
};

export default GraduallyEmerging;