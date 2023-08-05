import React, { useEffect } from 'react';
import './index.less';
import AMap from 'AMap';

// const { AMap } = window;

const MapComponent = (props: any) => {

    const { width = '100%', height = 500 } = props;

    useEffect(() => {
        initMap();
    }, []);

    const initMap = () => {
        const map = new AMap.Map('mapContainer', {
            zoom: 13,//级别
            center: [113.270657, 23.179019],//中心点坐标
            enabled: false,

        });

        const marker = new AMap.Marker({
            // position: [116.39, 39.9]//位置
            position: new AMap.LngLat(113.270657, 23.179019),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '广州市白云区云城东路559-571号宏鼎云璟汇1栋13层'
        });
        map.add(marker);//添加到地图

    };

    return (
        <div>
            <div style={{ width, height }} id="mapContainer"></div>
        </div>
    );
};

export default MapComponent;


