import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Skills = () => {

  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: "20px"
  }

  const buttonStyle = "btn btn-dark disabled";

  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Skills
          </h2>
          <hr></hr>
          <br></br>
        </Col>
      </Row>
      <Row style={{paddingTop: "20px"}}>
        <Col>
          <h3>
            Front End
          </h3>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col style={style}>
          <Button variant={buttonStyle}>React</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>Redux</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>JavaScript (ES5 & ES6)</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>Bootstrap</Button>
          <br></br>
        </Col>
      </Row>
      <Row style={{paddingTop: "50px"}}>
        <Col style={{ paddingTop: "50px" }}>
          <h3>
            Back End
          </h3>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col style={style}>
          <Button variant={buttonStyle}>Node.js</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>Next.js</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>PostgreSQL</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>MySQL</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>MongoDB</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>RESTful API</Button>
          <br></br>
        </Col>
      </Row>
      <Row style={{paddingTop: "50px"}}>
        <Col style={{ paddingTop: "50px" }}>
          <h3>
          Miscellaneous
          </h3>
          <br></br>
        </Col>
      </Row>
      <Row style={{paddingBottom: "300px"}}>
        <Col style={style}>
          <Button variant={buttonStyle}>Git</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>Agile Methodologies</Button>
        </Col>
        <Col style={style}>
          <Button variant={buttonStyle}>AWS EC2</Button>
          <br></br>
        </Col>
      </Row>
    </Container>
  )
};

module.exports = Skills;