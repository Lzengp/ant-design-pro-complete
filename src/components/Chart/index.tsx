
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

/**
 * ECharts 组件基础部分
 * @param props 
 * @returns 
 */

const Chart = (props: any) => {

    const { option, onChange, onResize, notMerge, lazyUpdate, width = '100%', height = '100%' } = props;

    const elRef = useRef<any>();
    const [chartRef, setChartRef] = useState<any>();

    useEffect(() => {
        initChart(elRef.current);
        setOption(option);
        onChange && onChange();
        window.addEventListener('resize', () => {
            chartRef && chartRef.resize();
            onResize && onResize();
        });

        return () => {
            dispose();
        };
    }, []);

    useEffect(() => {
        option && setOption(option);
    }, [option, chartRef]);


    const initChart = el => {
        return new Promise(resolve => {
            setTimeout(() => {
                setChartRef(echarts.init(el));
                resolve();
            }, 0);
        });
    };

    const setOption = option => {
        if (!chartRef) {
            return;
        }
        chartRef.setOption(option, notMerge, lazyUpdate);
    };


    const dispose = () => {
        if (!chartRef) {
            return;
        }

        chartRef.dispose();
        setChartRef(null);
    };

    return (
        <div
            className="default-chart"
            ref={elRef}
            style={{ width, height }}
        />
    );


};

export default Chart;