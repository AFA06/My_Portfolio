import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdurashid Fattokhov </span>
            from <span className="purple">Tashkent, Uzbekistan</span>, currently based in London.
            <br />
            I’m a second-year BSc Computer Science (Artificial Intelligence) student at Brunel University London,
            actively seeking a placement opportunity in software development or related fields.
            <br />
            <br />
            My interests lie in full-stack web development, UI/UX design, and emerging technologies like blockchain and cloud computing.
            I enjoy working on impactful projects, especially in the healthcare and education domains.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding & Building Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cybersecurity (Kali Linux)
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing UI with Figma & Canva
            </li>
            <li className="about-activity">
              <ImPointRight /> Football & Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building — one line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Abdurashid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

