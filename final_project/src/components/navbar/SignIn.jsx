import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignInModal = (props) => {
  return(
   <>
   <Modal
      className="modal"
      show={props.modalOpen} 
      onHide={props.handleModalOpen}>   
       <Modal.Header className="modalHeader" closeButton>
          <Modal.Title className='modalTitle'>Login</Modal.Title>
       </Modal.Header>
       <Modal.Body className='modalContent'>
       <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>        
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
       </Modal.Body>
       <Modal.Footer>
          <Button variant="cancel" onClick={props.handleModalOpen}>
             Cancel
          </Button>
       </Modal.Footer>
   </Modal>
 </>
  )
}

export default SignInModal;

