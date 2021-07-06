import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Home() {

  const headerStyle = {
    justifyContent: 'flex-start'
  }
  return (
    <Container style={{ background: "grey" }}>
      <Row>
        <Col sm='12'>
          <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: 50, width: "auto", fontSize: 100 }}>Malcolm Marshall</h1>
          <p style={{ display: 'flex', justifyContent: 'center', marginTop: 10, width: "auto", fontSize: 50 }}>Software Engineer</p>
          {/* <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              View
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" id="product" onClick={(e) => view(e)}>Product</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="platform" onClick={(e) => view(e)}>Platform</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="timeline" onClick={(e) => view(e)}>Timeline</Dropdown.Item>
              <Dropdown.Item href="#/action-3" id="all" onClick={(e) => view(e)}>All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Col>
      </Row>
      <Row style={{ marginTop: 150}}>
        {/* <Col style={{ display: "flex", marginTop: 100, justifyContent: "space-around"}}> */}
        <Col style={{display: "flex", justifyContent: "flex-start"}}>
          <FileCopyIcon style={{ cursor: "pointer", fontSize: 70 }} />
          <a href="https://malcolm-marshall-resume.s3.amazonaws.com/Malcolm+Marshall+Resume+2021.pdf" style={{ fontSize: 50 }}>Resume</a>
        </Col>
        <Col style={{display: "flex", justifyContent: "center"}}>
          <LinkedInIcon style={{ cursor: "pointer", fontSize: 70 }} />
          <a href="https://www.linkedin.com/in/malcolm-marshall" style={{ fontSize: 50 }}>LinkedIn</a>
        </Col>
        <Col style={{display: "flex", justifyContent: "flex-end"}}>
          <GitHubIcon style={{ cursor: "pointer", fontSize: 70, justifyContent: "flex-end" }} />
          <a href="https://www.github.com/Malcolm-Marshall" style={{ fontSize: 50 }}>Github</a>
        </Col>
        {/* </Col> */}
      </Row>
      <Row>
        <Col style={{ display: 'flex', marginTop: 150 }}>
          <div style={{ fontSize: 25 }}></div>
          <PhoneIphoneIcon style={{ cursor: "pointer", fontSize: 50, marginBottom: 200 }} />
          <a href="tel:9288996209" style={{ fontSize: 30 }}>(928) 899 - 6209</a>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <EmailIcon onClick={() => parent.location = 'mailto:m.marshall369@gmail.com'} style={{ cursor: "pointer", fontSize: 50, marginBottom: 200 }} />
            <p onClick={() => parent.location = 'mailto:m.marshall369@gmail.com'} style={{ cursor: "pointer", fontSize: 30, color: "black" }}>m.marshall369@gmail.com</p>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}
