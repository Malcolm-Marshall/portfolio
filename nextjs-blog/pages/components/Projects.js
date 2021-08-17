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
          <hr></hr>
        </Col>
      </Row>
      <Row style={{ paddingTop: 100 }}>
          <h4>
            Go Fish
          </h4>
        <Col sm={3} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "nowrap" }}>
          <Image style={{ maxWidth: "200px" }} src="https://portfolio-photos-malcolm-marshall.s3.amazonaws.com/Screen+Shot+2021-05-21+at+11.51.06+AM.png" thumbnail />
        </Col>
        <Col>
        <p>
          Go Fish is a social networking site designed to select a movie for you and a friend to watch that matches both of your interests. As the selected project owner, I collaborated with the client and organized a team of engineers to plan, build, and deploy the application, all while following agile methodologies. At the start of each day, I would hold standup meetings to asses each teams progress, and provide assistance or delegate more attention to a certain team. Myself along with one other teammate took on the responsibility of creating the sliding carousels with movie information. After trying five different carousel libraries, we decided on React-slick. This allowed us to create carousels that would adjust no matter the screen size, which was a requirement from the client. While I had to push back on some of the stretch goals the client had, she ultimately was very happy with the product we created, and the time it took to complete.
        </p>
          <a href="https://github.com/Team-Go-Fish/Go-Fish">Github</a>
        </Col>
      </Row>
      <Row style={{ paddingTop: 100}}>
      <h4>
        Next-Level
      </h4>
        <Col sm={3} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "nowrap" }}>
          <Image style={{ maxWidth: "200px", height: "250px" }} xs={6} src="https://portfolio-photos-malcolm-marshall.s3.amazonaws.com/Screen+Shot+2021-08-16+at+2.21.49+PM.png" thumbnail />
        </Col>
        <Col>
          <p>
          During a three week time period, myself and three other engineers were tasked with creating an e-commerce web app that includes a product overview, comparison tools and outfit builder, user questions and answers, and a ratings and reviews breakdown. I took ownership of the questions and answers section. The top questions about the product would be displayed, along with the top rated answers for that specific question. As a user you would be able to rank both the questions and answers, as well as add your own. There is a search bar included which allows the user to search for key words in either the questions, or their corresponding answers. A challenge I faced while working on this project was re-rendering the page too many times while using the search bar since it would re-search the questions and answers with each key press. I modified where I was accessing the data, so that when the search bar was searching, it would be searching a static version that would not trigger excessive re-renders.
          </p>
          <a href="https://www.youtube.com/watch?v=0lDV6Q23qII">Demo</a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="https://github.com/hr-team-usa/project-catwalk">Github</a>
        </Col>
      </Row>
      <Row style={{ paddingTop: 100 }}>
          <h4>
            Happy Plants
          </h4>
        <Col sm={3} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "nowrap" }}>
          <Image style={{ maxWidth: "200px" }} src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/small-plant-aloe-white-pot_58c45425-9d3e-457d-b5ee-8950c2c89b2f_1080x.jpg?v=1625606010" thumbnail />
        </Col>
        <Col>
        <p>
          Happy plants was a short, 2 day minimum viable product project. The task was to complete a full-stack application, and the content and use could be whatever I wanted. At the time, I was having trouble keeping house plants alive because I was not watering them at the right times. So I decided to make an application that would keep track of when you last watered, and remind you when it is time to water again. I spent a long time looking for an API that would provide water and nutrition information, but the level of detail needed for the API to return the desired data seemed like too much to ask from the user. So instead, I made the decision to keep it simple and have the user input the frequency of watering needed as well as the amount of sunlight needed.
        </p>
        <a href="https://drive.google.com/file/d/1Ca92hkRg12FKvMsL_9ukUTaUB-bM-S6P/view?usp=sharing">Demo</a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href="https://github.com/Malcolm-Marshall/mvp4">Github</a>
        </Col>
      </Row>
      <Row style={{ paddingTop: 100, paddingBottom: 100  }}>
          <h4>
            Grizzly Den
          </h4>
        <Col sm={3} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "nowrap" }}>
          <Image style={{ maxWidth: "200px" }} src="https://portfolio-photos-malcolm-marshall.s3.amazonaws.com/Screen+Shot+2021-03-16+at+7.39.09+PM.png" thumbnail />
        </Col>
        <Col>
        <p>
          The goal of this project was the replace an existing API with a back-end system that could support the full dataset provided in CSV files, and scale to meet traffic demands. I was responsible for designing a database and server that would ultimately be deployed on an AWS EC2 micro instance which could support a minimum of 100 requests per second. I chose to work with PostgreSQL because I wanted a relational database with six related tables. Once the database was seeded with over 20 million records, I optimized the tables by indexing so all queries would take less than 10ms. Finally tested and scaled the back-end with an AWS EC2 microservice to achieve 1000rps tested locally with k6.
        </p>
          <a href="https://github.com/Grizzly-Den-SDC/productOverview">Github</a>
        </Col>
      </Row>

    </Container>
  )
};

module.exports = Projects;