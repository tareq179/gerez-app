import axios from "axios";
import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "./Admin.css";

const Admin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const loading = toast.loading("Adding...Please wait!");
    axios
      .post("https://shielded-peak-06501.herokuapp.com/addAdmin", data)
      .then((res) => {
        toast.dismiss(loading);
      });
  };
  return (
    <section className="make-admin">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5 mx-md-5 mt-5 bg-white form-main d-flex justify-content-center">
          <div className="py-md-4">
            <Form.Label>Email</Form.Label>
            <Form.Row>
              <Form.Group as={Col} xs="auto" style={{ width: "25rem" }}>
                <Form.Control
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group as={Col} xs="auto">
                <Button type="submit" className="btn-main">
                  Add
                </Button>
              </Form.Group>
            </Form.Row>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Admin;
