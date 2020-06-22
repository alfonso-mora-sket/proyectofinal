import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'


//class Example extends React.Component {

function Example({mostrar}) {

 var [show, setShow] = useState(false,false);
  
 var handleClose = () => setShow(false);

 //const handleShow = () => setShow(mostrar);

  return (
      <>
{/*}        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
  </Button> */}
 
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example