import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        className="project-image"
      />
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        
        {/* Tech Stack Chips */}
        {props.techStack && (
          <div className="tech-stack-container">
            {props.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Project Buttons - Only render if at least one link exists */}
        {(props.ghLink || props.demoLink) && (
          <div className="project-buttons">
            {/* GitHub Button */}
            {props.ghLink && (
              <Button 
                variant="primary" 
                href={props.ghLink} 
                target="_blank"
                className="github-btn"
              >
                <BsGithub /> &nbsp;
                {props.githubButtonText || "GitHub"}
              </Button>
            )}
            
            {/* Demo/Live Website Button */}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="outline-primary"
                href={props.demoLink}
                target="_blank"
                className="demo-btn"
              >
                <CgWebsite /> &nbsp;
                {props.demoButtonText || "Live Demo"}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;