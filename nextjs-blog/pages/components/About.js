import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const About = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h2>
            About Me
          </h2>
          <hr></hr>
          <p style={{paddingTop: "20px"}}>
            I have always had an interest in engineering, but never knew where to start. After high school, I attended three schools over four years, mainly focusing on trade schools. I had a passion for furniture making, but decided that it was too much of a risk to commit my life to something that I love, but could potentially become tainted by being in the industry. I changed paths and let furniture making be a hobby of mine while working in restaurants for a few years. I made some great friends and learned a lot about people in general, but I needed a career change.
          </p>
          <p>
            I have a few friends who had graduated from Galvanize, they talked it up so much and convinced me to check it out. I was intrigued. On the very day that I made the decision to sign up for the Galvanize prep course, I got a call about a job that I had interviewed for months previously. I decided to go in for the second interview for the position of field technician at a tower engineering company. As an avid climber, I was thought this sounded like a great opportunity.
          </p>
          <p>
            I was with that company for about two years, loved the work, but was tired of putting in 50-60 hours a week with little to no growth opportunity. Job security is very important to me, but I made the difficult decision to quit my job and pursue a career in software engineering. The prospect of being mentally challenged and diving into a completely new industry was scary but exciting. After the first few days, I knew that I had made the right decision. I was finally getting the mental challenge that I had been craving for a while, and there were plenty of challenges. When I made my first connection from a database to the front end, I was so excited and my eyes were opened the potential of what I could do with software engineering.
          </p>
          <p>
            Being involved in an industry where continuous learning is so greatly encouraged is a dream. There are endless possibilities, and I can't wait to see where it takes me.
          </p>
        </Col>
      </Row>
    </Container>
  )
};

module.exports = About;