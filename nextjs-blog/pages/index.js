import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import EmailIcon from '@material-ui/icons/Email';


export default function Home() {

  const headerStyle = {
    justifyContent: 'flex-start'
  }
  return (
    <Container style={{ background: "grey" }}>
      <Row>
        <Col sm='12'>
          <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: 50, width: "auto", fontSize: 100 }}>Malcolm Marshall</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'space-around', marginTop: 200 }}>
          <a href="https://malcolm-marshall-resume.s3.amazonaws.com/Malcolm+Marshall+Resume+2021.pdf" style={{ fontSize: 50 }}>Resume</a>
          <a href="https://www.linkedin.com/in/malcolm-marshall" style={{ fontSize: 50 }}>LinkedIn</a>
          <a href="https://www.github.com/Malcolm-Marshall" style={{ fontSize: 50 }}>Github</a>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'space-around', marginTop: 100 }}>
          <div style={{fontSize: 25}}>(928) 899 - 6209</div>
          <EmailIcon onClick={() => parent.location = 'mailto:m.marshall369@gmail.com'} style={{ cursor: "pointer", fontSize: 50, marginBottom: 50 }} />
        </Col>
      </Row>
    </Container>
  )
}
