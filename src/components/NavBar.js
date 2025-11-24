import React, { useState } from "react";
import logo from '../assets/logo.png';
import '../styles/NavBar.css'
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
const NavBar = () => { // Component Definition
const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = () => {
setOpenLinks(!openLinks);
};
return (
<div className="navbar">
<div className="leftSide" id={openLinks ? "open" : "close"}>


<Link to="/">
<img src={logo} className="logo" alt="not found" />
</Link>
  <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
           
          </Form> <Button className="d-flex" variant="outline-danger">Search</Button>
<div className="hiddenLinks">
<Link to="/">Home</Link>
<Link to="/products">Products</Link>
<Link to="/company">Company</Link>
<Link to="/contact">Contact</Link>
<Link to="/cart" style={{ color: "white", display: "flex", alignItems: "center" }}>
    <FaShoppingCart size={20} color="white" style={{ marginRight: "6px" }} />
    Cart
  </Link>
</div>
</div>

<div className="rightSide">
<Link to="/">Home</Link>
<Link to="/products">Products</Link>
<Link to="/company">Company</Link>
<Link to="/contact">Contact</Link>
  <Link to="/cart" style={{ color: "white", display: "flex", alignItems: "center" }}>
    <FaShoppingCart size={20} color="white" style={{ marginRight: "6px" }} />
    Cart
  </Link>

<button onClick={toggleNavbar}>
<ReorderIcon />
</button>
</div>
</div>
);
};

export default NavBar;



