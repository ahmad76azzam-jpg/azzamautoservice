import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent";
import fiammlogo from "../assets/fiammlogo.png";
import lmlogo from "../assets/lmlogo.png";
import sctlogo from "../assets/sctlogo.png";
import store from "../assets/store.jpg";
import scshot from "../assets/scshot.png";
const Home = () => {
  return (
    <div>
      {/* ====== Hero Carousel ====== */}
      <CarouselComponent />

      {/* ====== Shop by Brand ====== */}
      <Container className="my-5 text-center">
        <h2 className="mb-4 fw-bold text-danger">Shop by Brand</h2>
        <Row className="g-4 justify-content-center">
          {/* FIAMM */}
          <Col md={4}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Img
                variant="top"
                src={fiammlogo}
                style={{ height: "250px", objectFit: "contain", background: "#fff" }}
              />
              <Card.Body>
                <Card.Title>FIAMM Batteries</Card.Title>
                <Card.Text>
                  Trusted European batteries for unmatched power and reliability.
                </Card.Text>
                <Button as={Link} to="/products" variant="danger">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* LIQUI MOLY */}
          <Col md={4}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Img
                variant="top"
                src={lmlogo}
                style={{ height: "250px", objectFit: "contain", background: "#fff" }}
              />
              <Card.Body>
                <Card.Title>Liqui Moly</Card.Title>
                <Card.Text>
                  Premium German oils, lubricants, and additives for top performance.
                </Card.Text>
                <Button as={Link} to="/products" variant="danger">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* SCT */}
          <Col md={4}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Img
                variant="top"
                src={sctlogo}
                style={{ height: "250px", objectFit: "contain", background: "#fff" }}
              />
              <Card.Body>
                <Card.Title>SCT Filters</Card.Title>
                <Card.Text>
                  High-quality filters designed to protect and extend your engine’s life.
                </Card.Text>
                <Button as={Link} to="/products" variant="danger">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ====== About Us Section ====== */}
      <Container fluid className="py-5 bg-light">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={scshot}
              alt="Our Store"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-danger mb-3">About Azzam Auto Service</h2>
            <p>
              At Azzam Auto Service, we’re proud to serve South Lebanon with top-tier
              automotive products from trusted global brands like FIAMM, Liqui Moly,
              and SCT. We provide reliable parts, oils, and batteries to keep your
              vehicle in perfect condition.
            </p>
            <Button as={Link} to="/company" variant="outline-danger">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      {/* ====== Contact & Subscribe Section ====== */}
      <Container className="text-center py-5">
        <h3 className="fw-bold mb-3">Stay Connected</h3>
        <p>Subscribe for offers, updates, and new arrivals.</p>
        <Button as={Link} to="/contact" variant="danger" size="lg">
          Contact Us
        </Button>
      </Container>
    </div>
  );
};

export default Home;
