import { Modal, Button } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

// import Hela athkam: form css file.
import '../Asset/Style/Helaathkam_Form.css';



function Login ({ isModalOpen, closeLoginModal}) {
  return (
    <>
    
    {/* login modal */}
    <Modal show={isModalOpen}
           onHide={closeLoginModal} 
           backdrop="static"
           size='lg'
           dialogClassName='loginModal'
           centered>
            
      <Modal.Header id='loginModalHeader' closeButton>
        <Modal.Title><h2>Welcome back!</h2><h6>Login and Rediscover what awaits you at Hela Athkam.</h6></Modal.Title>
      </Modal.Header>

      {/* login form content within modal body. */}
      <Modal.Body id='loginModalBody'>
        <Row className='mb-5'></Row>

        {/* login form email */}
        <Row className="mb-4">
          <Col></Col>
          <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="email">@</InputGroup.Text>
            <Form.Control
              placeholder="Enter Your E-mail Address"
              type="email"
              aria-label="UserEmail"
              aria-describedby="email"
              autoFocus
            />
          </InputGroup>
              </Col>
          <Col></Col>
        </Row> 

        {/* login form password */}
        <Row className="mb-5">
          <Col></Col>
          <Col xs={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="password1">@</InputGroup.Text>
            <Form.Control
              placeholder="Enter Your Password"
              type="password"
              aria-label="UserPwd1"
              aria-describedby="password1"
            />
          </InputGroup>
          </Col>
          <Col></Col>
        </Row>

        {/* login button */}
        <Row className='justify-content-center mb-5' > 
        <Button variant="secondary"  onClick={closeLoginModal} id='loginButton'>Login</Button>
        </Row>
      </Modal.Body>

      <Modal.Footer id='loginModalFooter'>
         {/* link to sign up form. */}
         <Row>
          <Form.Label><i className='text-muted'>First visit to Hela Athlam?
            
            here.</i>
          </Form.Label>
        </Row>

         
      </Modal.Footer>
    </Modal>
    
    </>
  );
};

export default Login;