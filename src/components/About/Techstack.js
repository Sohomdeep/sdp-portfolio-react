import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPhp,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiAmazonaws,
  SiMysql
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" tooltip="Java Script">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node Js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express Js">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="php">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Laravel">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongo DB">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Techstack;
