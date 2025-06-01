import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about software development and always eager to explore and build useful digital solutions.
              <br />
              <br />
              My technical toolkit includes
              <i>
                <b className="purple"> Java, JavaScript, HTML/CSS, and Python (basic)</b>.
              </i>
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple"> full-stack web development</b>
              </i>
              &nbsp;using technologies such as
              <b className="purple"> React (Vite) on the frontend</b> and{" "}
              <b className="purple">Spring Boot with H2/MySQL on the backend</b>.
              <br />
              <br />
              My interests include building
              <i>
                <b className="purple"> scalable web applications, user-friendly interfaces</b>,
              </i>
              and exploring areas such as
              <i>
                <b className="purple"> cloud services and cybersecurity</b>.
              </i>
              <br />
              <br />
              I enjoy collaborating on group projects and have experience in tools like{" "}
              <b className="purple">Git, Postman, Figma, Trello, and Notion</b> to ensure smooth development workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AFA06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/fattokhov_zafx"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdurashid-fattokhov/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abdurashid.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
