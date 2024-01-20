import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import RequestOnline from "./Pages/RequestOnline";
import JoinUs from "./Pages/JoinUs";
import Contact from "./Pages/Contact";
import { Navbar, Nav, Container } from "react-bootstrap";



function App() {
  return (
    <>
     <Navbar bg="light" expand="lg" className="" id="navbarMain"> 

      <Navbar.Brand><h1>Hela Athkam</h1></Navbar.Brand>
      <Container>
        {/* First row content */}
        {/* Second row content */}
      </Container>
      </Navbar>


    <BrowserRouter>

  
    <Header /> 
    
    
    <Container className="container-fluid vh-100" style={{marginTop:20}}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/requestonline" element={<RequestOnline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/joinus" element={<JoinUs />} />

      </Routes>

    </Container>
    <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
