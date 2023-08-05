import Chart from "@/components/Chart";
import { useEffect, useMemo, useState } from "react";
import './register';
import { request } from "umi";

const initData = {
    "harbourCargo": [
        {
            "countryEn": "GERMANY",
            "totalNumber": 10006.4929,
            "harbourZh": " 法兰克福国际机场 ",
            "firstDestination": "FRA",
            "city": "FRANKFURT",
            "latitude": "50.033333",
            "harbourCode": "FRA",
            "harbourEn": "FRANKFURT",
            "longitude": "8.570556"
        },
        {
            "countryEn": "CHINA",
            "totalNumber": 2004,
            "harbourZh": "广州市白云机场",
            "firstDestination": "CAN",
            "city": "GUANGZHOU",
            "latitude": "23.392401",
            "harbourCode": "CAN",
            "harbourEn": "GUANGZHOU",
            "longitude": "113.299004"
        },
        {
            "countryEn": "FRANCE",
            "totalNumber": 6.296,
            "harbourZh": "巴黎夏尔.戴高乐机场",
            "firstDestination": "CDG",
            "city": "PARIS",
            "latitude": "49.012798",
            "harbourCode": "CDG",
            "harbourEn": "PARIS",
            "longitude": "2.55"
        },
        {
            "countryEn": "\r\n\r\nUSA",
            "totalNumber": 4,
            "harbourZh": "洛杉矶国际机场 ",
            "firstDestination": "LAX",
            "city": "LOS ANGELES",
            "latitude": "33.942501",
            "harbourCode": "LAX",
            "harbourEn": "LOS ANGELES",
            "longitude": "-118.407997"
        }
    ],
    "airlineCargo": [
        {
            "totalNumber": 1675813.63,
            "companyName": "中国南方航空股份有限公司",
            "airCompanyCode": "CZ"
        },
        {
            "totalNumber": 666826.66,
            "companyName": "香港航空",
            "airCompanyCode": "HX"
        },
        {
            "totalNumber": 351710.62,
            "companyName": "中国国际货运航空有限公司",
            "airCompanyCode": "CA"
        },
        {
            "totalNumber": 16999.32,
            "companyName": "格鲁吉亚航空",
            "airCompanyCode": "D4"
        },
        {
            "totalNumber": 1010.96,
            "companyName": "日本航空公司",
            "airCompanyCode": "JL"
        },
        {
            "totalNumber": 833.3,
            "companyName": "阿联酋航空",
            "airCompanyCode": "EK"
        },
        {
            "totalNumber": 666.64,
            "companyName": "预订舱",
            "airCompanyCode": "YD"
        },
        {
            "totalNumber": 499.98,
            "companyName": "海南航空控股股份有限公司",
            "airCompanyCode": "HU"
        },
        {
            "totalNumber": 333.32,
            "companyName": "AAA",
            "airCompanyCode": "AA"
        },
        {
            "totalNumber": 166.66,
            "companyName": "蒙古航空",
            "airCompanyCode": "OM"
        }
    ]
};

// 记录机场文本标签的坐标信息
let labelPos = [];

let obj = [
    {
        harbourZh: '阿尔丹河',
        latitude: '58.6000',
        totalNumber: '57',
        longitude: '125.4000',
    },
    {
        harbourZh: '卡尔加里',
        latitude: '51.1330109',
        totalNumber: '8',
        longitude: '-114.00685',
    },
    {
        harbourZh: '努克',
        latitude: '64.1667',
        totalNumber: '8',
        longitude: '-51.7167',
    },

    {
        harbourZh: '巴西利亚',
        latitude: '-15.868989',
        totalNumber: '10',
        longitude: '-47.921830',
    },

    {
        harbourZh: '阿克雷伊 ',
        latitude: '65.6500',
        totalNumber: '47',
        longitude: '-18.0833',
    },

    {
        harbourZh: '设菲尔德 ',
        latitude: '53.3667',
        totalNumber: '15',
        longitude: '-1.5000',
    },
    {
        harbourZh: '坎达拉 ',
        latitude: '11.8333',
        totalNumber: '83',
        longitude: '50.0333',
    },
    {
        harbourZh: '穆塔雷',
        latitude: '-18.9667',
        totalNumber: '8',
        longitude: '32.4500',
    },
    {
        harbourZh: '威尔明顿',
        latitude: '34.2674871',
        totalNumber: '67',
        longitude: '-77.910736',
    },
    {
        countryEn: '62.6667',
        harbourZh: '蒙杜',
        latitude: '8.6333',
        totalNumber: '5',
        longitude: '16.0667',
    },

    {
        countryEn: '62.6667',
        harbourZh: 'STURTCREEK',
        latitude: '-19.3333',
        totalNumber: '44',
        longitude: '128.1333',
    },

    {
        countryEn: '62.6667',
        harbourZh: '马格尼托哥尔斯克',
        latitude: '53.4500',
        totalNumber: '55',
        longitude: '59.0667',
    },
    {
        countryEn: '62.6667',
        harbourZh: '开普敦',
        latitude: '-33.969618',
        totalNumber: '2',
        longitude: '18.5966149',
    },

    {
        countryEn: '62.6667',
        harbourZh: 'SANFERNANDOD',
        latitude: '7.8667',
        totalNumber: '9',
        longitude: '-67.4333',
    },

    {
        countryEn: '62.6667',
        harbourZh: '埃迈',
        latitude: '-17.0667',
        totalNumber: '35',
        longitude: '168.4000',
    },
];

// 广州
const GZData = [
    [{ name: '英国' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '英国', value: 120 }],
    [{ name: '美国' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '美国', value: 120 }],
    [{ name: '日本' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '日本', value: 120 }],
    [{ name: '韩国' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '韩国', value: 120 }],
    [{ name: '东南亚' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '东南亚', value: 120 }],
    [{ name: '澳大利亚' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '澳大利亚', value: 120 }],
    [{ name: '德国' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '德国', value: 120 }],
    [{ name: '俄罗斯' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '俄罗斯', value: 120 }],
    [{ name: '埃及' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '埃及', value: 120 }],
    [{ name: '加拿大' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '加拿大', value: 120 }],
    [{ name: '巴西' }, { name: '广州', value: 120 }],
    [{ name: '广州' }, { name: '巴西', value: 120 }],
];

// 小飞机的图标，可以用其他图形替换
const planePath =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

const MapEchart = () => {
    const [series, setSeries] = useState<any>();

    useEffect(() => {
        // const initialInfo = queryShipment({});
        // console.log(initialInfo);
        const series = setSeriesFn(getGZData(initData.harbourCargo), getGeoCoordMapData(initData.harbourCargo));
        setSeries(series);
    }, []);


    const getGeoCoordMapData = (source: any) => {
        source = obj;
        let initialGeoCoordMap = {
            广州: [113.5107, 23.2196],
        };
        source &&
            source.forEach((item) => {
                initialGeoCoordMap[item.harbourZh] = [item.longitude, item.latitude];
            });
        return initialGeoCoordMap;
    };

    const getGZData = (source: any) => {
        source = obj;
        let initialGZData: Array<any> = [];
        source &&
            source.map((item, index) => {
                if (index > 12) {
                    initialGZData.push([
                        {
                            name: '广州',
                        },
                        {
                            name: item.harbourZh,
                            value: item.totalNumber,
                        },
                    ]);
                    // initialGZData.push([
                    //     {
                    //         name: item.harbourZh
                    //     },
                    //     {
                    //         name: source[index + 1]?.harbourZh || '广州',
                    //         value: item.totalNumber
                    //     }
                    // ]);
                    // initialGZData.push([
                    //     {
                    //         name: source[index - 1].harbourZh
                    //     },
                    //     {
                    //         name: item.harbourZh,
                    //         value: item.totalNumber
                    //     }
                    // ]);
                } else {
                    initialGZData.push([
                        {
                            name: item.harbourZh,
                        },
                        {
                            name: '广州',
                            value: item.totalNumber,
                        },
                    ]);
                    initialGZData.push([
                        {
                            name: '广州',
                        },
                        {
                            name: item.harbourZh,
                            value: item.totalNumber,
                        },
                    ]);
                }
            });
        return initialGZData;
    };

    // 获取地图中起点和终点的坐标，以数组形式保存下来
    const convertData = (data: any, geoCoordMap: any) => {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if (fromCoord && toCoord) {
                res.push([
                    {
                        coord: fromCoord, // 起点坐标
                    },
                    {
                        coord: toCoord, // 终点坐标
                    },
                ]);
            }
        }
        return res;
    };

    // 掉接口获取后台数据
    const queryShipment = (params: any) => {
        return request('/goldjet-ops-platform/dataScreen/getCommonCountList', {
            method: 'get',
            params: {
                recordType: 'airlineCargo,harbourCargo',
                timeType: 'year',
            }
        });
    };

    /*
         图中一共用到三种效果，分别为航线特效图、飞机航线图以及城市图标涟漪图。
         要用到setOption中的series属性，并且对每个城市都要进行三次设置。
     */
    const setSeriesFn = (GZData: any, geoCoordMap: any) => {
        // 重新计算每个文本标签的距离
        if (labelPos.length) {
            labelPos = [];
        }

        // const { geoCoordMap, GZData } = this.state;
        let color = ['#9ae5fc', '#dcbf71']; // 自定义图中要用到的颜色
        let series = []; // 用来存储地图数据
        [['广州', GZData]].forEach((item, i) => {
            series.push(
                {
                    // 白色航线特效图
                    type: 'lines',
                    zlevel: 1, // 用于分层，z-index的效果
                    effect: {
                        show: true, // 动效是否显示
                        period: 6, // 特效动画时间
                        trailLength: 0.7, // 特效尾迹的长度
                        color: '#005f85', // 特效颜色
                        symbolSize: 3, // 特效大小
                    },
                    lineStyle: {
                        normal: {
                            // 正常情况下的线条样式
                            color: '#005f85',
                            width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                            curveness: -0.2, // 线条曲度
                        },
                    },
                    data: convertData(item[1], geoCoordMap), // 特效的起始、终点位置
                },
                {
                    // 小飞机航线效果
                    type: 'lines',
                    zlevel: 2,
                    //symbol: ['none', 'arrow'],   // 用于设置箭头
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
                        symbolSize: 15,
                    },
                    lineStyle: {
                        normal: {
                            color: '#005f85',
                            width: 1,
                            opacity: 0.6,
                            curveness: -0.2,
                        },
                    },
                    label: {
                        show: false,
                    },
                    data: convertData(item[1], geoCoordMap), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
                },
                {
                    // 散点效果
                    type: 'effectScatter',
                    coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
                    zlevel: 3,

                    rippleEffect: {
                        brushType: 'stroke', // 波纹绘制效果
                    },
                    label: {
                        normal: {
                            // 默认的文本标签显示样式
                            show: true,
                            position: 'left', // 标签显示的位置
                            formatter: '{b}', // 标签内容格式器
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#056FAA',
                        },
                    },
                    tooltip: {
                        show: true,
                    },
                    labelLayout(param) {
                        const { labelRect } = param;

                        // 重叠的文本需要偏移dy
                        const dy = labelPos.reduce((acc, label) => {
                            if (label.text === param.text) return acc;

                            const { abs } = Math;
                            const diffX = abs(label.x + label.dy - labelRect.x);
                            if (diffX > labelRect.width) return acc;

                            const diffY = abs(label.y - labelRect.y);
                            if (diffY < labelRect.height) {
                                acc -= 1.8 * labelRect.height;
                            }

                            return acc;
                        }, 0);

                        // 最终结果
                        const res: any = {
                            x: labelRect.x,
                            y: labelRect.y,
                            dy,
                        };

                        if (res.y + dy < 0) {
                            // 避免超出范围
                            res.dy = 0;
                            res.moveOverlap = 'shiftY';
                        }

                        const index = labelPos.findIndex((label) => label.text === param.text);
                        if (index > -1) {
                            labelPos.splice(index, 1, { ...res, text: param.text });
                        } else {
                            labelPos.push({ ...res, text: param.text });
                        }
                        labelPos.sort((a: any, b: any) => a.y - b.y);
                        return res;
                    },
                    data: item[1].map((dataItem: any) => {
                        return {
                            // name:  dataItem[1].name === '广州' ? '' : dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name], // 起点的位置
                            label: {
                                normal: {
                                    position: 'right',
                                },
                            },
                            labelLine: {
                                show: true,
                                showAbove: true,
                                length2: 5,
                                smooth: true,
                            },
                            name: dataItem[1].name,
                            symbolSize: 15, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
                            totalVal: dataItem[1].value,
                        };
                    }),
                },
            );
        });
        // 显示终点位置,类似于上面最后一个效果，放在外面写，是为了防止被循环执行多次
        series.push({
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke',
            },
            label: {
                normal: {
                    show: false,
                    position: 'left',
                    formatter: '{b}',
                },
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[1],
                },
            },
            data: [
                {
                    name: '广州',
                    value: [113.5107, 23.2196, 30],
                    // label: {
                    //     normal: {
                    //         position: 'right'
                    //     }
                    // }
                },
            ],
        });
        return series;
    };


    // 最后初始化世界地图中的相关数据
    const option = {
        backgroundColor: '#D6EAFA',
        tooltip: {
            formatter: function (params) {
                if (params.componentSubType == 'effectScatter' && params.name != '广州') {
                    return params.name + '<br />' + '总提货量: ' + params.data.totalVal;
                }
                return '';
            },
        },
        title: {
            show: 'false',
        },
        geo: {
            map: 'world', // 与引用进来的地图js名字一致
            roam: false, // 禁止缩放平移
            // show: false, //不显示地图的坐标系，但是其坐标系的功能依旧存在，可大大提高移动缩放的体验感，不会很卡顿
            center: [10.97, 29.71],
            itemStyle: {
                // 每个区域的样式
                normal: {
                    areaColor: '#9DCBF7',
                    borderColor: '#93C6F7',
                },
                emphasis: {
                    areaColor: '#50a2f6',
                },
            },
            left: 300,
            right: 300,
        },
        series: series, // 将之前处理的数据放到这里
        textStyle: {
            fontSize: 12,
        },
    };


    const renderChart = useMemo(() => {
        return (
            <Chart option={option} onChange={() => { labelPos = []; }} onResize={() => { labelPos = []; }} />
        );
    }, [series]);

    return (
        <div style={{ height: '550px' }}>
            {renderChart}
        </div>
    );
};

export default MapEchart;