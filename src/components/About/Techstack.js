import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TechStack() {
  const techCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "OpenAI APIs", "Machine Learning", "RAG Systems", "TensorFlow", "PyTorch"]
    },
    {
      title: "Backend Systems", 
      skills: ["Node.js", "Java", "Spring Boot", "REST APIs", "FastAPI", "Express"]
    },
    {
      title: "Frontend Systems",
      skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Vector DBs"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["Docker", "Google Cloud", "Azure", "Hetzner", "Linux", "AWS"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"]
    }
  ];

  return (
    <div className="tech-stack-section">
      <h2 className="tech-stack-title">
        TECH <span className="gradient-text">STACK</span>
      </h2>
      
      <Container>
        <Row className="tech-categories">
          {techCategories.map((category, index) => (
            <Col lg={4} md={6} key={index} className="tech-category-col">
              <div className="tech-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-container">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TechStack;
