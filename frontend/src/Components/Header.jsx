import { Container, Nav, Navbar } from 'react-bootstrap';
// import my css file here.
import '../Asset/Style/Header.css';
// import my js file here.


function Header ({openLoginModal, openSignModal}) {
    return(
        <>
        
        {/* Main navbar with name, sign up and login */}
        <Navbar bg="light" expand="lg" className="d-flex justify-content-between" id="mainNavbar"> 
           <Container>
           <Navbar.Brand id='mainBrand'><h1>Hela Athkam</h1></Navbar.Brand>
            <Nav>
                <Nav.Link className="mainNavlink" onClick={openSignModal}><b>Sign Up</b></Nav.Link>
                <Nav.Link  className="mainNavlink" onClick={openLoginModal}><b>Login</b></Nav.Link>
            </Nav>
           </Container>
        </Navbar>

        {/* pages navbar with home/ about/ products/ services/ request online/ join us. */}
        <Navbar sticky='top' id='pageNavBarOnly' className='pageNavBar'>
            <Container className='justify-content-center'>
                <Nav  variant='pills'  activeKey="/home">
                    
                    <Nav.Link className='pageLink me-5' to='/' href='/' exact activeClassName='active-Link'>Home</Nav.Link>
                    <Nav.Link className='pageLink mx-5' to='/about' href='/about' activeClassName='active-Link'>About</Nav.Link>
                    <Nav.Link className='pageLink mx-5' to='/products' href='/products' activeClassName='active-Link'>Products</Nav.Link>
                    <Nav.Link className='pageLink mx-5' to='/services' href='/services' activeClassName='active-Link'>Services</Nav.Link>
                    <Nav.Link className='pageLink mx-5' to='/orderonline' href='/orderonline' activeClassName='active-Link'>Order Online</Nav.Link>
                    <Nav.Link className='pageLink mx-5' to='/contactus' href='/contact' activeClassName='active-Link'>Contact Us</Nav.Link>
                    <Nav.Link className='pageLink mx-5' to='/joinus' href='/joinus' activeClassName='active-Link'>Join Us</Nav.Link>
            
                </Nav>
            </Container>
        </Navbar>


                

                    

        </>
        
    )
}

export default Header