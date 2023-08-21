import MapComponent from "@/components/MapComponent";
import './index.less';
import { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { HomeOutlined, MailOutlined, MobileOutlined, ScheduleOutlined, UserOutlined } from "@ant-design/icons";

const btnStyleBorder = {
    background: '#FFFFFF',
    color: '#000000',
    border: '1px solid #9d9d9d',
};

const selectBtn = {
    background: '#ff4f23',
    color: '#FFFFFF',
};

const ContactUs = () => {

    const [form] = Form.useForm();

    const options = [
        { label: '智能制造', value: '1' },
        { label: '智慧供应链', value: '2' },
        { label: '全球贸易与跨境物流', value: '3' },
        { label: '全渠道管理', value: '4' },
        { label: '其他', value: '5' },
    ];

    const [currentBtn, setCurrentBtn] = useState<string>('1');

    const branchOfficeList = [
        {
            img: 'https://img2.baidu.com/it/u=3248461145,2393043158&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
            name: '广州新白云机场分公司',
            address: '广州市新白云机场机场北区机场大道海关综合大楼210室',
            telephone: '020-36070166/36070322',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img1.baidu.com/it/u=3967363438,2702388329&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
            name: '北京分公司',
            address: '北京市顺义区南法信镇南法信大街118号天博中心C座8层3802-815J室',
            telephone: '010-69450806',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img2.baidu.com/it/u=3252502842,1428054901&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=500',
            name: '成都分公司',
            address: '成都市双流航空物流园物区物流大道',
            telephone: '028-85726503',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img1.baidu.com/it/u=3127124836,2451534174&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500',
            name: '上海分公司',
            address: '上海市浦东机场施湾七路1018号301-303室',
            telephone: '021-68853699/68354988/68354998/68354789',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img2.baidu.com/it/u=3248461145,2393043158&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
            name: '温州分公司',
            address: '浙江省温州市车站大道华昌大夏1205室',
            telephone: '0577-88678997',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img2.baidu.com/it/u=3248461145,2393043158&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
            name: '南沙分公司',
            address: '广州市南沙区龙穴大道中13号1401房之自编1412',
            telephone: '020-66616988',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img2.baidu.com/it/u=3248461145,2393043158&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
            name: '深圳分公司',
            address: '深圳市保安机场兴华路102号兴围物流中心A栋208室',
            telephone: '0755-22191617/22191567/27779129',
            email: 'marketing@goldjet.com.cn',
        },
        {
            img: 'https://img2.baidu.com/it/u=3248461145,2393043158&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
            name: '厦门分公司',
            address: '厦门市湖里区高崎国际机场翔云一路40号楼盛通中心4楼B-6',
            telephone: '0592-5762330',
            email: 'marketing@goldjet.com.cn',
        },
    ];


    return (
        <div className="contactus-wrap">
            <div className="official-img">
                <img src={"https://www.walltechsystem.cn/upload/2020-11/160499550614158300.jpg"} />
                <div className="official-phone-number">官方电话：18802092056</div>
            </div>
            <div className="contactus-content">
                {/* <div className="contactus-button">
                    <div
                        className="contactus-button-item"
                        style={currentBtn == '1' ? selectBtn : btnStyleBorder}
                        onClick={() => { setCurrentBtn('1'); }}
                    >公司地址</div>
                    <div
                        className="contactus-button-item"
                        style={currentBtn == '2' ? selectBtn : btnStyleBorder}
                        onClick={() => { setCurrentBtn('2'); }}
                    >合作商</div>
                </div> */}
                <div className="head-office-address">
                    <div >
                        <div className="office-img">
                            <img src="https://img.scbao.com/uploads/allimg/110724/6285-110H409503525.jpg" />
                        </div>
                        <div className="office-map">
                            <MapComponent height={350} width={420} />
                        </div>

                    </div>
                    <div className="detail-address">
                        <div className="address-title">公司：广东艾普数智科技有限公司</div>
                        <div>地址：广州市黄埔区大沙北路12号</div>
                        <div>手机：18802092056</div>
                        <div>邮箱：Kevin_Ng@.Arp.com.cn</div>
                        <div>网址：http://www.arp.com.cn</div>
                    </div>
                </div>
                {/* 
                <div className="branch-office-address">
                    <Row gutter={24}>
                        {
                            branchOfficeList.map(item => {
                                return (
                                    <>
                                        <Col span={11} className="branch-office-address-item">
                                            <img src={item.img} />
                                            <div className="branch-office-address-desc">
                                                <div className="title">{item.name}</div>
                                                <div>地址：{item.address}</div>
                                                <div>电话：{item.email}</div>
                                                <div>邮箱：{item.email}</div>
                                            </div>
                                        </Col>
                                    </>
                                );
                            })
                        }
                    </Row>
                </div> */}
                <div style={{ marginTop: '50px' }}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={(values) => { console.log(values); }}
                    >
                        <Form.Item label="1.公司名称" name="corporateName" rules={[{ required: true, message: '请输入公司名称' }]}>
                            <Input prefix={<HomeOutlined />} placeholder="请输入公司名称" />
                        </Form.Item>
                        <Form.Item label="2.姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
                            <Input prefix={<UserOutlined />} placeholder="请输入姓名" />
                        </Form.Item>
                        <Form.Item label="3.职位" name="position" rules={[{ required: true, message: '请输入职位' }]}>
                            <Input prefix={<ScheduleOutlined />} placeholder="请输入职位" />
                        </Form.Item>
                        <Form.Item
                            label="4.邮箱"
                            name="email"
                            rules={[
                                { required: true, message: '请输入邮箱' },
                                { type: 'email', message: '请输入正确的邮箱' }
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="请输入邮箱" />
                        </Form.Item>
                        <Form.Item label="5.手机号" name="phoneNumber" rules={[
                            { required: true, message: '请输入手机号' },
                            {
                                validator: (_, value) => {
                                    if (!value) {
                                        return Promise.reject();
                                    }
                                    if (/^0?(13[0-9]|15[012356789]|18[0-9]|17[0-9])[0-9]{8}$/.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('请输入正确的手机号码'));
                                }
                            }
                        ]}>
                            <Input prefix={<MobileOutlined />} placeholder="请输入手机号" />
                        </Form.Item>
                        <Form.Item
                            label="6.您比较关心以下哪些内容"
                            name="concernedContent"
                            valuePropName="checked"
                        >
                            <Checkbox.Group options={options} />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;