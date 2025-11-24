import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import lm1 from '../assets/lm1.png';
import lm2 from '../assets/lm2.png';
import lm3 from '../assets/lm3.png';
import lm4 from '../assets/lm4.png';
import lma1 from '../assets/lma1.png';
import lma9 from '../assets/lma9.png';
import lma10 from '../assets/lma10.jpg';
import lma11 from '../assets/lma11.png';
import lma12 from '../assets/lma12.png';
import lma13 from '../assets/lma13.png';
import lma14 from '../assets/lma14.png';
import lma8 from '../assets/lma8.png';
import motul1 from '../assets/motul1.webp';
import motul2 from '../assets/motul2.webp';
import motul3 from '../assets/motul3.webp';
import motul4 from '../assets/motul4.webp';
import motul5 from '../assets/motul5.webp';
import motul6 from '../assets/motul6.webp';
import motul7 from '../assets/motul7.webp';

const Products = () => {
  const liquiMolyProducts = [
    { id: 1, img: lm1, title: "TOP TEC 4200 5W-30", desc: "1L", detail: "High performance synthetic oil", price: "$14.99" },
    { id: 2, img: lm2, title: "LEICHTLAUF 10W-40", desc: "1L", detail: "For Asian & American vehicles", price: "$12.50" },
    { id: 3, img: lm3, title: "Top Tec 4110 5W-40", desc: "1L", detail: "Reduces friction with MoS2", price: "$16.25" },
    { id: 4, img: lm4, title: "Race Tec 10W-60", desc: "1L", detail: "For diesel and petrol engines", price: "$18.00" },
    { id: 5, img: lma1, title: "Oil Leak Stop", desc: "300ml", detail: "Stops small oil leaks", price: "$9.99" },
    { id: 6, img: lma9, title: "Motor Protect", desc: "500ml", detail: "Increases engine life", price: "$13.75" },
    { id: 7, img: lma10, title: "ProLine Radiator Leak Stop", desc: "250ml", detail: "Prevents radiator leaks", price: "$8.90" },
    { id: 8, img: lma11, title: "Power Steering Leak Stop", desc: "300ml", detail: "Stops steering fluid leaks", price: "$10.40" },
    { id: 9, img: lma12, title: "Cera Tec", desc: "300ml", detail: "Reduces friction and wear", price: "$22.00" },
    { id: 10, img: lma13, title: "Fuel System Cleaner", desc: "300ml", detail: "Cleans fuel injectors", price: "$11.50" },
    { id: 11, img: lma14, title: "Anti Crystal Additive", desc: "150ml", detail: "Prevents fuel freezing", price: "$7.80" },
    { id: 12, img: lma8, title: "Valve Cleaner", desc: "150ml", detail: "Cleans valves and injectors", price: "$9.40" },
  ];

  const motulProducts = [
    { id: 1, img: motul1, title: "MOTUL 300V 5W-40", desc: "1L", detail: "Fully synthetic motor oil", price: "$19.99" },
    { id: 2, img: motul2, title: "MOTUL 300V 15W-60", desc: "1L", detail: "High performance engine oil", price: "$21.50" },
    { id: 3, img: motul3, title: "MOTUL 300V 10W-40", desc: "1L", detail: "Versatile racing oil", price: "$20.00" },
    { id: 4, img: motul4, title: "MOTUL Engine Flush", desc: "300ml", detail: "Pre-oil change cleaner", price: "$10.99" },
    { id: 5, img: motul5, title: "MOTUL Transmission Cleaner", desc: "300ml", detail: "Cleans gearbox internals", price: "$11.50" },
    { id: 6, img: motul6, title: "MOTUL GDI Cleaner", desc: "300ml", detail: "Cleans gasoline direct injection", price: "$12.20" },
    { id: 7, img: motul7, title: "MOTUL Ultra All In One Cleaner", desc: "300ml", detail: "Fuel system cleaner", price: "$14.00" },
  ];

  const renderCards = (productsArray) =>
    productsArray.map((product) => (
      <Card key={product.id} style={{ width: '18rem', margin: '0 auto', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.title}
          style={{ height: '350px', objectFit: 'cover', width: '100%' }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.desc}</Card.Text>
          <h6 style={{ color: '#d32f2f', fontWeight: 'bold' }}>{product.price}</h6>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{product.detail}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between">
          <Button variant="danger" size="sm">Buy</Button>
          <Button variant="outline-dark" size="sm">Add to Cart</Button>
        </Card.Body>
      </Card>
    ));

  return (
    <div>
      {/* Liqui Moly Section */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1 style={{ color: '#d32f2f', fontWeight: 'bold' }}>Shop LIQUI MOLY Products</h1>
        <p>Browse our selection of premium oils and fluids for your vehicle</p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {renderCards(liquiMolyProducts)}
      </div>

      {/* MOTUL Section */}
      <div style={{ textAlign: 'center', margin: '40px 0 20px 0' }}>
        <h1 style={{ color: '#d32f2f', fontWeight: 'bold' }}>Shop MOTUL Products</h1>
        <p>High-performance oils and fluids for your vehicle</p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {renderCards(motulProducts)}
      </div>
    </div>
  );
};

export default Products;
