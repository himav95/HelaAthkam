import { Modal, Button } from 'react-bootstrap';

function NormalOrder ({ isNormalModalOpen, closeNormalModal }) {
  return (
    <>
    
    <Modal show={isNormalModalOpen} onHide={closeNormalModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Hela Athkam!</Modal.Title>
      </Modal.Header>

      {/* sign up form content */}
      <Modal.Body>
        <p>This is your login form.</p>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={closeNormalModal}>
          Close
        </Button>
        {/* Add additional buttons if needed */}
      </Modal.Footer>
    </Modal>
    
    </>
  );
};

export default NormalOrder;