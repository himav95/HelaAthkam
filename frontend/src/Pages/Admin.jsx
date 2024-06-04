import { Container, Navbar, Nav, NavDropdown, Offcanvas, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { Button, ButtonGroup, Offcanvas} from 'react-bootstrap';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { List, PersonCircle} from "react-bootstrap-icons";


function Admin() {

    // Admin offcanvas show/hide function details are here.
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar expande='lg' className="bg-body-tertiary">
            <Container>
                <Button onClick={handleShow}><List size={30} color="black" /></Button>
                <Navbar.Brand href='#offcanvas should be here'>HELA ATHKAM</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <PersonCircle size={30} color="black" />
                        {/* admin log I/O dropdown details is here. */}
                        <Nav.NavDropdown title="ADMIN" id='basic-nav-dropdown'>
                            <NavDropdown.Item href="#action1">Password change</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">Log out</NavDropdown.Item>
                        </Nav.NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        {/* Admin offcanvas regarding orders tables details are here. */}
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Hela athkam Orders</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <ButtonGroup vertical>
                    <DropdownButton as={ButtonGroup} title="Orders" id='bg-vertical-dropdown-1'>
                        <Dropdown.Item eventKey={1}>Normal Orders</Dropdown.Item>
                        <Dropdown.Item eventKey={2}>Special Editions</Dropdown.Item>
                        <Dropdown.Item eventKey={3}>Custom Orders</Dropdown.Item>
                    </DropdownButton>
                    <Button>Online Purchases</Button>
                    <Button>Craftsman Requests</Button>
                    <Button>Messages/Inquiries</Button>
                </ButtonGroup>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}


export default Admin;