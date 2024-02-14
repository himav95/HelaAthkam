import { Container, Nav, Navbar } from 'react-bootstrap';
import '../Asset/Style/Header.css';

function Header ({openLoginModal, openSignModal}) {
    return(
        <>
        
        {/* Main navbar with name, sign up and login */}
        <Navbar bg="light" expand="lg" className="d-flex justify-content-between" id="main_Navbar"> 
           <Container>
           <Navbar.Brand><h1>Hela Athkam</h1></Navbar.Brand>
            <Nav>
                <Nav.Link className="mx-auto" onClick={openSignModal}>Sign Up</Nav.Link>
                <Nav.Link  className="mx-auto" onClick={openLoginModal}>Login</Nav.Link>
            </Nav>
           </Container>
        </Navbar>

        {/* pages navbar with home/ about/ products/ services/ request online/ join us. */}
        <Navbar sticky='top' id='page_Navbar' className='pageNavBar mb-5'>
            <Container className='justify-content-center'>
                <Nav  variant='pills' activeKey="/home">
                    
                    <Nav.Link className='pageLink me-5' style={{color: '#f3f3f3'}} href='/'>Home</Nav.Link>
                    <Nav.Link className='pageLink mx-5' style={{color: '#f3f3f3'}} href='/about'>About</Nav.Link>
                    <Nav.Link className='pageLink mx-5' style={{color: '#f3f3f3'}} href='/products'>Products</Nav.Link>
                    <Nav.Link className='pageLink mx-5' style={{color: '#f3f3f3'}} href='/services'>Services</Nav.Link>
                    <Nav.Link className='pageLink mx-5' style={{color: '#f3f3f3'}} href='/orderonline'>Order Online</Nav.Link>
                    <Nav.Link className='pageLink mx-5' style={{color: '#f3f3f3'}} href='/contact'>Contact Us</Nav.Link>
                    <Nav.Link className='pageLink mx-5' style={{color: '#f3f3f3'}} href='/joinus'>Join Us</Nav.Link>
            
                </Nav>
            </Container>
        </Navbar>


                

                    

        </>
        
    )
}

export default Header