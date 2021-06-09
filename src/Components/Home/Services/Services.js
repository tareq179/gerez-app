import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ServicesDetail from "./ServiceDetail/ServicesDetail";
import "./services.css";
import axios from "axios";
import toast from "react-hot-toast";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://shielded-peak-06501.herokuapp.com/services")
      .then((res) => {
        setServiceData(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <section id="services" className="text-center py-5">
      <h5>What We do</h5>
      <h1>Services We provide</h1>
      <Row className="justify-content-center mx-auto mt-md-5 pt-5">
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          serviceData.map((service) => (
            <ServicesDetail key={service._id} service={service} />
          ))
        )}
      </Row>
    </section>
  );
};

export default Services;
