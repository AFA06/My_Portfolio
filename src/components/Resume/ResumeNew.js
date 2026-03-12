import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const pdfURL = process.env.PUBLIC_URL + "/Abdurashid_Fattokhov_Resume.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section>
      <Container fluid className="resume-section" id="resume">
        <Particle />
        <Container className="resume-content">
          <Row className="align-items-center justify-content-center">
            <Col lg={8} className="text-center">
              {/* Title Section */}
              <div className="resume-header">
                <h1 className="resume-title">
                  Resume
                </h1>
                <p className="resume-subtitle">
                  Download or preview my professional resume.
                </p>
              </div>

              {/* Download Button */}
              <div className="resume-action mb-5">
                <a
                  href={pdfURL}
                  download
                  className="btn resume-download-btn"
                >
                  Download Resume
                </a>
              </div>

              {/* Resume Preview Card */}
              <div className="resume-preview-container">
                <div className="resume-preview-card">
                  <Document 
                    file={pdfURL} 
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div className="resume-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading resume...</p>
                      </div>
                    }
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <div key={`page_${index + 1}`} className="resume-page-wrapper">
                        <Page
                          pageNumber={index + 1}
                          scale={width > 786 ? 1.2 : 0.65}
                          className="resume-page"
                        />
                      </div>
                    ))}
                  </Document>
                </div>
              </div>

              {/* Bottom Download Button */}
              <div className="resume-action mt-5">
                <a
                  href={pdfURL}
                  download
                  className="btn resume-download-btn"
                >
                  Download Resume
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ResumeNew;
