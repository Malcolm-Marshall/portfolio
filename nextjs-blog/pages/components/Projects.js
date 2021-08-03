import React, { useState } from 'react';
import { Container, Col, Row, Image, Alert } from 'react-bootstrap';

const Projects = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Recent Projects
          </h2>
        </Col>
      </Row>
      <Row style={{ paddingTop: 100 }}>
        <Col sm={3} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "nowrap" }}>
          <Image style={{ maxWidth: "200px" }} src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/small-plant-aloe-white-pot_58c45425-9d3e-457d-b5ee-8950c2c89b2f_1080x.jpg?v=1625606010" thumbnail />
        </Col>
      </Row>
      <Row style={{ paddingTop: 100 }}>
        <Col>
          <Image style={{ maxWidth: "200px", height: "200px" }} xs={6} src="https://github.com/Malcolm-Marshall/project-catwalk/raw/main/screenshots/NextLevel-ProductOverviewSS.png" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image xs={6} src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/small-plant-aloe-white-pot_58c45425-9d3e-457d-b5ee-8950c2c89b2f_1080x.jpg?v=1625606010" roundedCircle />
        </Col>
      </Row>
    </Container>
  )
};

module.exports = Projects;