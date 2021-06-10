import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import banner from "../../../../images/banner-img.png";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center banner">
        <Col md={4} className="p-md-5 order-2 order-md-1">
          <Fade left duration={2000} distance="40px">
            <h1>
              We Make Car <br /> Repair Hassle Free
            </h1>
            <p className="text-muted my-4 pr-md-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the
            </p>
            <Button className="btn-main" href="#pricing">
              Learn More
            </Button>
          </Fade>
        </Col>
        <Col md={6} className="order-1 order-md-2">
          <Fade right duration={2000} distance="40px">
            <Image src={banner} fluid />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
