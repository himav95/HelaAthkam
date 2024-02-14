import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

// import Hela athkam: form css file here.
import '../Asset/Style/Helaathkam_Form.css';


function SignUp ({ isModalOpen, closeSignModal}) {
  return (
    <>
    
    {/* sign up modal */}
    <Modal show={isModalOpen}
           onHide={closeSignModal} 
           backdrop="static" 
           size='lg'
           id='signUpModal'>

      <Modal.Header id='signUpModalHeader' closeButton>
        <Modal.Title><h2>Welcome to Hela Athkam!</h2></Modal.Title>
      </Modal.Header>

      {/* sign up form content within modal body. */}
      <Modal.Body id='signUpModalBody'>
        <Row className='mb-5'></Row>

        {/* sign up form full name and email row. */}
        <Row  className="mb-5">
          <Col></Col>
          {/* full name. */}
          <Col xs={5}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="fullName">@</InputGroup.Text>
            <Form.Control
              placeholder="Enter your Full Name"
              type="text"
              aria-label="Username"
              aria-describedby="fullName"
            />
          </InputGroup>
          </Col>

          {/* email. */}
          <Col xs={5}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="email">@</InputGroup.Text>
            <Form.Control
              placeholder="Enter Your E-mail Address"
              type="email"
              aria-label="UserEmail"
              aria-describedby="email"
            />
          </InputGroup>
          <Form.Floating className="mb-3" size='sm'>
          <Form.Control   
          id="email"
          type="email"
          placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
          </Form.Floating>
          </Col>
          <Col></Col>
        </Row>

        {/* sign up form password and re-password. */}
        <Row className="mb-5">
          <Col></Col>
          {/* password */}
          <Col xs={5}>
          <Form.Floating className='mb-3'>
            <Form.Control id='password1' type='password' placeholder='Enter password'/>
            <label htmlFor='password1'>Password</label>
          </Form.Floating>
          </Col>

          {/* re-password */}
          <Col xs={5}>
          <Form.Floating className='mb-3'>
            <Form.Control id='password2' type='password' placeholder='Enter password again'/>
            <label htmlFor='password2'>Re-Password</label>
          </Form.Floating>
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