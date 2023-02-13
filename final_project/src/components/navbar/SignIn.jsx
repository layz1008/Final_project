import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignInModal = (props) => {
  return(
   <>
   <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
       <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
       </Modal.Header>
       <Modal.Body className="SignInForm">
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
          <Button variant="danger" onClick={props.handleModalOpen}>
             Cancel
          </Button>
       </Modal.Footer>
   </Modal>
 </>
  )
}

export default SignInModal;

