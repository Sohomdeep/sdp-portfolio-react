import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiGit
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiJira
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux System">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jira">
        <SiJira />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
