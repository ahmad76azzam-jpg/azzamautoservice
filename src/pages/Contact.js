import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleCheckboxChange = () => {
    setSubscribed(!subscribed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <Container style={{ marginTop: "40px", marginBottom: "60px" }}>
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#d32f2f", fontWeight: "bold" }}>Contact Us</h1>
        <p>
          Have questions or feedback? We'd love to hear from you!  
          Fill out the form below to get in touch with us.
        </p>
      </div>

      {/* Main Layout */}
      <Row className="align-items-start">
        {/* Left: Contact Form */}
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
            </Form.Group>
<div
              style={{
                borderTop: "1px solid #ddd",
                marginTop: "20px",
                paddingTop: "20px",
              }}
            >
              <Form.Check
                type="checkbox"
                id="subscribeCheckbox"
                label="I’d like to receive emails, offers, and updates."
                checked={subscribed}
                onChange={handleCheckboxChange}
              />
              {subscribed && (
                <p style={{ color: "green", marginTop: "10px" }}>
                  ✅ You’re subscribed to our updates!
                </p>
              )}
            </div>
            <Button variant="danger" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>

        {/* Right: Contact Info Card */}
        <Col md={6}>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ color: "#d32f2f", fontWeight: "bold" }}>Contact Information</h4>
            <p><strong>Address:</strong> Tyre, South Lebanon</p>
            <p><strong>Phone:</strong> +961 70 123 456</p>
            <p><strong>Email:</strong> info@azzamautoservice.com</p>
            <p><strong>Working Hours:</strong> Mon–Sat: 8am – 6pm</p>

            {/* Subscription Checkbox */}
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
