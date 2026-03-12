import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="AFA06"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="dark"
        theme={{
          light: ["#1e1b4b", "#6d28d9", "#9333ea", "#c084fc", "#e9d5ff"],
          dark: ["#1e1b4b", "#6d28d9", "#9333ea", "#c084fc", "#e9d5ff"]
        }}
        style={{
          maxWidth: "100%",
          overflow: "auto"
        }}
      />
    </Row>
  );
}

export default Github;