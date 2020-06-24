import React from 'react'
import { Container, Modal, Button, Form, Col } from 'react-bootstrap'

class Poliza extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          mostrar: false
        }
      }

    handleCerrar = () => {
      this.setState({mostrar : false})
    }
  
    handleMostrar = () => {
      this.setState({mostrar : true})
    }

    render() {

    return(

            <Container>
               <Modal 
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.mostrar}
                    onHide={this.handleCerrar}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Captura de Pólizas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column lg={2}>Nombre:</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Nombre del cliente" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={2}>Importe:</Form.Label>
                                <Col>
                                    <Form.Control type="numeric" placeholder="Importe de la póliza" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleCerrar} >Aplicar cambios</Button>
                        <Button variant="secondary" onClick={this.handleCerrar} >Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}

export default Poliza
