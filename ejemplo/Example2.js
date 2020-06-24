import React from 'react'
import { Modal, Button } from 'react-bootstrap'


//class Example extends React.Component {

  class Example2 extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        mostrar: this.props.show
      }
    }

  handleClose = () => {
    this.setState({mostrar : false})
  }

  handleMostrar = () => {
    this.setState({mostrar : true})
  }

  render(){
   return (
      <>
        <Modal show={this.state.mostrar} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
  export default Example2