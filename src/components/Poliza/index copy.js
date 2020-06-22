import React from 'react'
import { Container, Modal, Button, Form, Col } from 'react-bootstrap'

function Poliza() {

    const [mostrar, setMostrar] = React.useState(false, false);
        
    const handleCerrar = () => setMostrar(false);
    const handleMostrar = () => setMostrar(true);
    
    console.log('Poliza', mostrar)

    return(
            <Container>
                <Modal 
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={mostrar}
                    onHide={handleCerrar}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Captura de Pólizas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Row>
                                <Form.Label column lg={2}>
                                Nombre:
                                </Form.Label>
                                <Col>
                                <Form.Control type="text" placeholder="Nombre del cliente" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={2}>
                                Importe:
                                </Form.Label>
                                <Col>
                                <Form.Control type="text" placeholder="Importe de la póliza" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCerrar} >Close</Button>
                        <Button variant="primary" onClick={handleCerrar} >Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
}

export default Poliza
