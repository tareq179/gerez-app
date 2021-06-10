import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const loading = toast.loading("Please wait...!");
    emailjs
      .send("gmail", "gerez_template", data, "user_UhuudhC7XpS5QUo7xDWsT")
      .then(
        (res) => {
          toast.dismiss(loading);
          if (res.text === "OK") {
            reset();
          }
        },
        (err) => {
          toast.dismiss(loading);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <Fade bottom duration={2500} distance="40px">
        <Container>
          <div className="text-center">
            <h1>Contact Us</h1>
            <h4>We'd love to hard from you!</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="input-container">
              <Col xs={12}>
                <div className="styled-input wide">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    required
                  />
                  <label>Name</label>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="styled-input">
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    required
                  />
                  <label>Email</label>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="styled-input" style={{ float: "right" }}>
                  <input
                    type="text"
                    {...register("phone", { required: true })}
                    required
                  />
                  <label>Phone Number</label>
                </div>
              </Col>
              <Col xs={12}>
                <div className="styled-input wide">
                  <textarea
                    type="text"
                    {...register("message", { required: true })}
                    required
                  />
                  <label>Message</label>
                </div>
              </Col>
              <Col xs={12}>
                <button className="btn-lrg submit-btn btn-main">
                  Send Message
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </Fade>
    </section>
  );
};

export default Contact;
