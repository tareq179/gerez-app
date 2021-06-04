import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServicesDetail.css";

const ServicesDetail = ({ service }) => {
  const { image, title, description, price } = service;
  return (
    <Col md={4} className="mb-5 text-center service-detail">
      <Card className="border-0 py-4" style={{ maxWidth: "25rem" }}>
        <Card.Img
          variant="top"
          height="100"
          src={image}
          style={{ objectFit: "contain" }}
        />
        <Card.Body className="pt-0">
          <Card.Title as="h4" className="my-4">
            {title}
          </Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <div>
            <p>${price}</p>
            <Button className="btn-main" as={Link} to="/">
              Book Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServicesDetail;
