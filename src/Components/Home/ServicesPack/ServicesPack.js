import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Spinner, Tab } from "react-bootstrap";
import turboEngine from "../../../images/turbo-engine.svg";
import battery from "../../../images/battery.svg";
import carRepair from "../../../images/car-repair.svg";
import check from "../../../images/check.svg";
import service from "../../../images/service.svg";
import tyre from "../../../images/tyre.svg";
import PricingItem from "../PricingItem/PricingItem";
import "./ServicesPack.css";
import axios from "axios";
import Fade from "react-reveal/Fade";
import toast from "react-hot-toast";

const ServicesPack = () => {
  const [SerVicesPackData, setSerVicesPackData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://shielded-peak-06501.herokuapp.com/services")
      .then((res) => {
        setSerVicesPackData(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <Fade bottom duration={2500} distance="40px">
        <Container className="my-md-5">
          <Col xs={12}>
            <div className="pricing-title text-center">
              <span>Best Pricing Plan</span>
              <h2>Services Packages</h2>
            </div>
          </Col>
          <Row>
            <Col xs={12}>
              <Tab.Container defaultActiveKey="1">
                <Nav className="pricing-nav">
                  <Nav.Item className="pricing-content-1">
                    <Nav.Link eventKey="1">
                      <img alt="" src={turboEngine} width="35" height="35" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pricing-content-2">
                    <Nav.Link eventKey="2">
                      <img alt="" src={tyre} width="40" height="40" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pricing-content-3">
                    <Nav.Link eventKey="3">
                      <img alt="" src={carRepair} width="35" height="35" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pricing-content-4">
                    <Nav.Link eventKey="4">
                      <img alt="" src={check} width="40" height="40" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pricing-content-5">
                    <Nav.Link eventKey="5">
                      <img alt="" src={battery} width="36" height="36" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="pricing-content-6">
                    <Nav.Link eventKey="6">
                      <img alt="" src={service} width="40" height="40" />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  {loading ? (
                    <Spinner animation="border" variant="danger" />
                  ) : (
                    SerVicesPackData.map((packData, idx) => (
                      <PricingItem key={idx} id={idx} packData={packData} />
                    ))
                  )}
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  );
};

export default ServicesPack;
