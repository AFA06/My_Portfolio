import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";
import feedback from "../../Assets/Projects/feedback.png";
import hospital from "../../Assets/Projects/hospital.png";
import desctop from "../../Assets/Projects/desctop.png";
import medicine from "../../Assets/Projects/medicine.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desctop}
              isBlog={false}
              title="Desktop Screenshot Tool"
              description="A lightweight application built to capture full desktop screenshots with simple command-line inputs. Developed using Python, it allows users to trigger screenshots of the entire desktop with customizable commands, saving high-quality images effortlessly. Ideal for documentation, tutorials, or personal use."
              ghLink="https://github.com/AFA06/Screenshot-Desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicine}
              isBlog={false}
              title="Medicine Tracker"
              description="A streamlined pharmacy inventory management tool built with Python. It enables users to track, add, update, and remove medicine records through an intuitive interface, ensuring accurate inventory for healthcare providers."
              ghLink="https://github.com/AFA06/Ely-Lilly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="A comprehensive hospital management system developed with Java Window Builder. It enables patients to register, fill out forms for data collection, upload next of kin information, search and add medical problems, and access previous records, streamlining healthcare administration."
              ghLink="https://github.com/AFA06/Hospital-Management-System"
                     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback}
              isBlog={false}
              title="BrighterYou - Mental Health Support App"
              description="A web application built with Spring Boot and React to support student mental health. BrighterYou fosters a community space for sharing experiences via feedback forms and reviews, featuring a carousel of 3 reviews, an average rating star bar, and secure submissions with Bearer token authentication."
              ghLink="https://github.com/BrunelCS/cs2001-2024-25-group-20"
           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
