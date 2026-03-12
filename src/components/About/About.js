import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import AboutCard from "./AboutCard";
import ProfileCard from "./ProfileCard";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-hero">
          <Col md={7} className="about-left">
            <AboutCard />
          </Col>
          <Col md={5} className="about-right">
            <ProfileCard />
          </Col>
        </Row>
        
        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
