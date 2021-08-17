import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';


export default function Home() {

  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [home, setHome] = useState(true);

  const headerStyle = {
    justifyContent: 'flex-start'
  }

  const view = (e) => {
    if (e.target.id === 'about') {
      setAbout(true);
      setProjects(false);
      setSkills(false);
      setHome(false);
    } else if (e.target.id === 'skills') {
      setAbout(false);
      setProjects(false);
      setSkills(true);
      setHome(false);
    } else if (e.target.id === 'projects') {
      setAbout(false);
      setProjects(true);
      setSkills(false);
      setHome(false);
    } else if (e.target.id === 'home') {
      setAbout(false);
      setProjects(false);
      setSkills(false);
      setHome(true);
    }
  }

  return (
    <>
    <Container className="bg-image" style={{ backgroundImage: "url(https://www.xmple.com/wallpaper/linear-white-gradient-blue-1920x1080-c2-b0c4de-faebd7-a-285-f-14.svg)", backgroundSize: "cover"}}>
      <Row>
        <Col sm='12'>
          <Col style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10, width: "auto", fontSize: 50 }}>
            <Dropdown size="sm">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm"> More...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2" id="home" onClick={(e) => view(e)}>Home</Dropdown.Item>
                <Dropdown.Item href="#/action-1" id="about" onClick={(e) => view(e)}>About Me</Dropdown.Item>
                <Dropdown.Item href="#/action-2" id="skills" onClick={(e) => view(e)}>Skills</Dropdown.Item>
                <Dropdown.Item href="#/action-2" id="projects" onClick={(e) => view(e)}>Projects</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {home ?
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', width: "auto", fontSize: 100 }}>
                <h1 style={{fontSize: 100}}>Malcolm Marshall</h1>
              </Col>
              <Row>
                <Col>
                  <p style={{ display: 'flex', justifyContent: 'center', marginTop: 10, width: "auto", fontSize: 50 }}>Software Engineer</p>
                </Col>
              </Row>
            </Row> : null}
        </Col>
      </Row>
      { home ?
        <>
          <Row style={{ marginTop: 150 }}>
            <Col style={{ display: "flex", justifyContent: "flex-start" }}>
              <PictureAsPdfIcon style={{ cursor: "pointer", fontSize: 70 }} />
              <a href="https://malcolm-marshall-resume.s3.amazonaws.com/Malcolm+Marshall+Resume+2021.pdf" style={{ fontSize: 50 }}>Resume</a>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <LinkedInIcon style={{ cursor: "pointer", fontSize: 70 }} />
              <a href="https://www.linkedin.com/in/malcolm-marshall" style={{ fontSize: 50 }}>LinkedIn</a>
            </Col>
            <Col style={{ display: "flex", justifyContent: "flex-end" }}>
              <GitHubIcon style={{ cursor: "pointer", fontSize: 70, justifyContent: "flex-end" }} />
              <a href="https://www.github.com/Malcolm-Marshall" style={{ fontSize: 50 }}>Github</a>
            </Col>
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
        </> : null}
      { about ?
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
        : null}
      {skills ?
        <Skills />
        : null}
      {projects ?
        <Projects />
        : null}
    </Container></>
  )
}
