import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import '../Asset/Style/SignUp.css';

function SignUp ({ isModalOpen, closeSignModal}) {
  return (
    <>
    
    <Modal show={isModalOpen}
           onHide={closeSignModal} 
           backdrop="static" 
           size='lg'
           id='signUpModal'>

      <Modal.Header id='signUpModalHeader' closeButton>
        <Modal.Title><h2>Welcome Back!</h2></Modal.Title>
      </Modal.Header>

      {/* sign up form content */}
      <Modal.Body id='signUpModalBody'>
        <Row className='mb-5'></Row>

        {/* sign up form full name and email row. */}
        <Row  className="mb-5">
          <Col></Col>
          {/* full name. */}
          <Col xs={5}>
          <Form.Group controlId="fullName">
                <Form.Label>Full Name <Form.Label className='required'>*</Form.Label></Form.Label>
                <Form.Control type="text" autoFocus />
              </Form.Group>
          </Col>

          {/* email. */}
          <Col xs={5}>
          <Form.Group controlId="email">
                <Form.Label>Email <Form.Label className='required'>*</Form.Label></Form.Label>
                <Form.Control type="email" placeholder='helaathkam@example.com'/>
              </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        {/* sign up form password and re-password. */}
        <Row className="mb-5">
          <Col></Col>
          {/* password */}
          <Col xs={5}>
          <Form.Group controlId="password1">
                <Form.Label>password <Form.Label className='required'>*</Form.Label></Form.Label>
                <Form.Control type="password" />
              </Form.Group>
          </Col>

          {/* re-password */}
          <Col xs={5}>
          <Form.Group controlId="password2">
                <Form.Label>Re-Password <Form.Label className='required'>*</Form.Label></Form.Label>
                <Form.Control type="password" />
              </Form.Group>
          </Col>
          <Col></Col>
        </Row>

        {/* sign up button. */}
        <Row className='justify-content-center mb-5' > 
        <Button variant="secondary"  onClick={closeSignModal} id='signUpButton'>Sign Up</Button>
        </Row>
      </Modal.Body>
    </Modal>
    
    </>
  );
};

export default SignUp;