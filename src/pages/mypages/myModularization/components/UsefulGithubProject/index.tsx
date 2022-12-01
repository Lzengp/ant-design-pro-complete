import { Col, Row } from 'antd';

const UsefulGithubProject = () => {
  const arrList = [
    {
      url: 'https://github.com/denysdovhan/wtfjs/blob/master/README-zh-cn.md',
      title: 'JavaScript有意思的地方',
    },
  ];

  return (
    <>
      <h2>有意思的GitHub项目</h2>
      <Row gutter={24}>
        {arrList.map((item, index) => {
          return (
            <Col span={6}>
              <a
                key={index}
                onClick={() => {
                  window.open(item.url);
                }}
              >
                {item.title}
              </a>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default UsefulGithubProject;
