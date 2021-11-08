import React from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={4}>
          <Statistic title="Total Cryptocurrencies" value={5} />
        </Col>
        <Col span={4}>
          <Statistic title="Total Exchanges" value={5} />
        </Col>
        <Col span={4}>
          <Statistic title="Total Marketcap" value={5} />
        </Col>
        <Col span={4}>
          <Statistic title="Total 24hr Volume" value={5} />
        </Col>
        <Col span={4}>
          <Statistic title="Total Market" value={5} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
