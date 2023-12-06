import React, { useEffect } from 'react';

const luckyCss = {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px'
};

interface LuckysheetProps {
    sheetData: any;
}

const Luckysheet = (props: LuckysheetProps) => {

    const { sheetData } = props;

    useEffect(() => {

        const luckysheet = window.luckysheet;
        luckysheet.create({
            container: "luckysheet",
            lang: 'zh', // 设定表格语言
            data: sheetData
        });
    }, [sheetData]);

    return (
        <div id="luckysheet" style={luckyCss} ></div>
    );

};

export default Luckysheet;