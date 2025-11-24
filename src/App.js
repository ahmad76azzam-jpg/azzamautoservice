import NavBar from './components/NavBar';
import Footer from './components/footer';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Company from './pages/Company';
import CarouselComponent from './components/CarouselComponent';

const App = () => (
<BrowserRouter>
<div style={{ display: "flex", flexDirection: "column", minHeight:
"100vh" }}>
<NavBar />
<Routes>
  <Route index element={<Home />} />
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/company" element={<Company />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cart" element={<Cart />} />
</Routes>


<Footer />
</div>
</BrowserRouter>
);

export default App;



