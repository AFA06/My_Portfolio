import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";  // Import Telegram icon

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Abdurashid Fattokhov</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AF</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AFA06"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* Telegram replaces Twitter here */}
            <li className="social-icons">
              <a
                href="https://t.me/fattokhov_zafx"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abdurashid-fattokhov/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/abdurashid.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
