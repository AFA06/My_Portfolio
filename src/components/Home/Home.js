import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center min-vh-100">
            <Col md={7} className="hero-left">
              <div className="hero-text">
                <h1 className="hero-title">
                  Abdurashid Fattokhov
                </h1>
                
                <div className="hero-subtitle">
                  <Type />
                </div>
                
                <p className="hero-description">
                  I build AI-powered systems, scalable platforms, and intelligent tools 
                  that solve real-world problems through machine learning and software engineering.
                </p>
                
                <div className="hero-buttons">
                  <Button onClick={() => navigate("/project")} className="hero-btn-primary">
                    View Projects
                  </Button>
                  <a
                    href="/Abdurashid_Fattokhov_Resume.pdf"
                    download
                    className="btn hero-btn-secondary"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </Col>

            <Col md={5} className="hero-right">
              <div className="hero-visual">
                <div className="neural-network">
                  <div className="neural-node node-1"></div>
                  <div className="neural-node node-2"></div>
                  <div className="neural-node node-3"></div>
                  <div className="neural-node node-4"></div>
                  <div className="neural-node node-5"></div>
                  <div className="neural-node node-6"></div>
                  <div className="neural-connection conn-1"></div>
                  <div className="neural-connection conn-2"></div>
                  <div className="neural-connection conn-3"></div>
                  <div className="neural-connection conn-4"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;