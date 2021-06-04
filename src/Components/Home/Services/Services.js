import React from "react";
import { Row } from "react-bootstrap";
import Repair from "../../../images/logo.svg";
import Tires from "../../../images/tyre.png";
import Diagnostic from "../../../images/check2.svg";
import Batteries from "../../../images/battery.svg";
import ServicesDetail from "./ServiceDetail/ServicesDetail";
import "./services.css";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      image: Repair,
      title: "Engine Repair",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have inventore dolorem.",
      price: 25,
    },
    {
      id: 2,
      image: Tires,
      title: "Tires Replacement",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have inventore dolorem.",
      price: 35,
    },
    {
      id: 3,
      image: Diagnostic,
      title: "Diagnostic",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have inventore dolorem.",
      price: 45,
    },
    {
      id: 4,
      image: Batteries,
      title: "Batteries",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have inventore dolorem.",
      price: 65,
    },
    {
      id: 5,
      image: Repair,
      title: "Transmission",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have inventore dolorem.",
      price: 50,
    },
    {
      id: 6,
      image: Diagnostic,
      title: "Breaks",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have inventore dolorem.",
      price: 25,
    },
  ];

  return (
    <section id="services" className="text-center py-5">
      <h5>What We do</h5>
      <h1>Services We provide</h1>
      <Row className="justify-content-center mx-auto mt-md-5 pt-5">
        {serviceData.map((service) => (
          <ServicesDetail key={service.id} service={service} />
        ))}
      </Row>
    </section>
  );
};

export default Services;
