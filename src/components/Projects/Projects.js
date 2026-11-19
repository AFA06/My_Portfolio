import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import feedback from "../../Assets/Projects/feedback.png";
import hospital from "../../Assets/Projects/hospital.png";
import desctop from "../../Assets/Projects/desctop.png";
import medicine from "../../Assets/Projects/medicine.png";
import strawberry from "../../Assets/Projects/strawberry.jpg";
import retseplar from "../../Assets/Projects/retseplar.jpg";
// Note: New project images need to be added to Assets/Projects folder
// For now using placeholder images from existing ones

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects
        </h1>
        <p style={{ color: "white" }}>
          A selection of systems and applications I have built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Retseplar: my cooking startup, live and onboarding first users */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retseplar}
              isBlog={false}
              title="Retseplar – Step-by-Step Cooking Platform (Startup)"
              description="My startup, live in production and onboarding its first users. Chefs and creators publish free and premium recipes; home cooks follow them in a hands-free cook mode with exact amounts, built-in timers and the screen kept awake, so nobody has to rewind YouTube. Creators sell premium recipes with no commission, unlocked by secure order codes, and get promo codes and a sales dashboard. Also includes a shopping list, cookbooks, photo reviews and an admin panel. Built solo: 73 commits, about 18.7k lines of TypeScript."
              techStack={["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Cloudflare R2", "Vercel"]}
              ghLink="https://github.com/AFA06/retseplar"
              demoLink="https://coooooking1.vercel.app"
              demoButtonText="Visit Website"
            />
          </Col>

          {/* Strawberry by Feya: bilingual shop catalogue managed from a Telegram bot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={strawberry}
              isBlog={false}
              title="Strawberry by Feya – Shop Catalogue + Telegram Bot"
              description="A live bilingual (Russian / Uzbek) catalogue for a chocolate-strawberry shop in Tashkent. The owner manages everything from a Telegram bot: she sends a photo, name and price, and the box appears on the site instantly, with a Russian translation added automatically. Includes light and dark mode, a mobile-first design and SEO."
              techStack={["Astro", "TypeScript", "Vercel", "Vercel Blob", "Telegram Bot API", "SEO"]}
              ghLink="https://github.com/AFA06/strawberry-by-feya"
              demoLink="https://strawberry-by-feya.vercel.app"
              demoButtonText="Visit Website"
            />
          </Col>

          {/* Project 1: Desktop Screenshot Tool */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desctop}
              isBlog={false}
              title="Desktop Screenshot Tool"
              description="A lightweight Python application that solves the problem of capturing high-quality desktop screenshots with minimal user interaction. The solution provides command-line automation for effortless screenshot capture, saving time for developers and power users."
              techStack={["Python", "Pillow", "PyAutoGUI", "Command Line"]}
              ghLink="https://github.com/AFA06/Screenshot-Desktop"
            />
          </Col>

          {/* Project 2: Medicine Tracker */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicine}
              isBlog={false}
              title="Medicine Tracker"
              description="Addresses medication inventory challenges in healthcare facilities. Built with Python and Tkinter, this solution provides real-time tracking of medicine stock levels, reducing manual errors and improving operational efficiency for pharmacy management."
              techStack={["Python", "Tkinter", "SQLite", "OOP"]}
              ghLink="https://github.com/AFA06/Ely-Lilly"
            />
          </Col>

          {/* Project 3: Hospital Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="Streamlines patient registration and medical record management in healthcare institutions. This Java-based system centralizes patient data, reduces administrative overhead, and improves data accuracy through an intuitive Swing interface connected to MySQL."
              techStack={["Java", "Window Builder", "Swing", "MySQL"]}
              ghLink="https://github.com/AFA06/Hospital-Management-System"
            />
          </Col>

          {/* Project 4: BrighterYou – Mental Health Support App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback}
              isBlog={false}
              title="BrighterYou – Mental Health Support App"
              description="Addresses student mental health challenges by providing a safe platform for sharing experiences. This full-stack React and Spring Boot application enables anonymous feedback with JWT authentication, fostering community support while maintaining user privacy."
              techStack={["React", "Spring Boot", "Java", "PostgreSQL", "JWT"]}
              // No buttons for this project as requested
              ghLink={null}
              demoLink={null}
            />
          </Col>

          {/* Project 5: MavaAcademy */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback} // Placeholder image
              isBlog={false}
              title="MavaAcademy"
              description="An online learning platform similar to Udemy and Coursera where architecture companies and other organizations host professional video courses. Students can purchase courses and access structured learning content through the platform."
              techStack={["React", "TypeScript", "Node.js", "MongoDB", "Bunny.net", "Cloudflare", "Hetzner"]}
              ghLink={null}
              demoLink="https://mavaacademy.com/"
              demoButtonText="Visit Website"
            />
          </Col>

          {/* Project 6: Grad-CAM Explainable AI for Chest X-Ray Diagnosis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital} // Placeholder image
              isBlog={false}
              title="Grad-CAM Explainable AI for Chest X-Ray Diagnosis"
              description="A final-year research project that evaluates the stability and reliability of Grad-CAM visual explanations in chest X-ray classification. The system highlights disease regions in uploaded X-ray images and analyzes how explanation maps behave under controlled image perturbations."
              techStack={["Python", "PyTorch", "Grad-CAM", "OpenCV", "Jupyter Notebooks"]}
              ghLink="#" // Placeholder for coming soon
              demoLink={null}
              githubButtonText="GitHub (coming soon)"
            />
          </Col>

          {/* Project 7: Next Architects Portfolio Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desctop} // Placeholder image
              isBlog={false}
              title="Next Architects Portfolio Platform"
              description="A professional web portfolio platform developed for an architecture company to showcase projects, company information, and services."
              techStack={["React", "Cloudflare", "Formspree"]}
              // No buttons for this project as requested
              ghLink={null}
              demoLink={null}
            />
          </Col>

          {/* Project 8: Smart AI Irrigation System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicine} // Placeholder image
              isBlog={false}
              title="Smart AI Irrigation System"
              description="An intelligent agriculture system designed to automate irrigation using AI-driven decision making and environmental data monitoring."
              techStack={["Flutter", "Firebase Firestore", "Python"]}
              // No buttons for this project as requested
              ghLink={null}
              demoLink={null}
            />
          </Col>

          {/* Project 9: School Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback} // Placeholder image
              isBlog={false}
              title="School Management System"
              description="A collaborative project developing a digital management platform for private schools, including administrative tools and mobile applications for students and staff."
              techStack={["Laravel", "PHP", "Flutter"]}
              // No buttons for this project as requested
              ghLink={null}
              demoLink={null}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;