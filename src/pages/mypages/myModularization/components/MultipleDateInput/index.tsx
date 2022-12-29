import MultipleDate from "@/components/MultipleDate";
import ProCardCode from "@/components/ProCardCode";
import { Col, Form, Row } from "antd";
import { code } from "./code";

const MultipleDateInput = () => {

    return (
        <>
            <Form>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item name="multDate" label="时间多选">
                            <MultipleDate />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <ProCardCode code={code} />
        </>
    )
}

export default MultipleDateInput;