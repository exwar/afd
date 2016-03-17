import React, { Component } from 'react';
import { Row, Col, PageHeader } from 'react-bootstrap';

const Header = () => {
  return <Row>
    <Col xs={12}>
      <PageHeader>
        Aussie Farmers Direct <small>code test</small>
      </PageHeader>
    </Col>
  </Row>;
};

export default Header;
