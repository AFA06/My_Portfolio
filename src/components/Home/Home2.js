import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
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
        <Row className="intro-section">
          <Col md={8} className="intro-content">
            <h1 className="intro-title">
              ABOUT
            </h1>
            
            <p className="intro-description">
              I'm an AI engineer and systems builder focused on developing intelligent platforms 
              that solve real-world challenges. My work centers on creating scalable AI systems, 
              machine learning applications, and educational technology tools that bridge the gap 
              between cutting-edge research and practical solutions.
            </p>
            
            <div className="key-focus">
              <h3 className="focus-title">Key Focus</h3>
              <div className="focus-items">
                <div className="focus-item">AI Systems</div>
                <div className="focus-item">Machine Learning</div>
                <div className="focus-item">Scalable Platforms</div>
                <div className="focus-item">Education Technology</div>
              </div>
            </div>
          </Col>
          
          <Col md={4} className="intro-avatar">
            <Tilt>
              <img src={myImg} className="img-fluid intro-image" alt="avatar" />
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
