import React from 'react'
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap'

class ListReclamos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrar: false,
        }
    }
    
    handleCerrar = () => {
       this.setState({mostrar: false})
    }

    handleMostrar = () => {
        this.setState({mostrar: true})
     }
 
    render() {

    return(
            <Container>
                <Modal 
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.mostrar}
                    onHide={this.changeCerrar}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Captura de Pólizas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row key={index}>
                                <Col sm="6">
                                    Nombre del Cliente
                                </Col>
                                <Col sm="6">
                                    Importe del Reclamo
                                </Col>
                        </Row>
                        {
                            this.props.listOfClaims.map((name, amount, index) => {
                                return(
                                    <Row key={index}>
                                        <Col sm="6">
                                            {claimPolicy.name}
                                        </Col>
                                        <Col sm="6">
                                            {claimPolicy.amount}
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.changeCerrar} >Close</Button>
                        <Button variant="primary" onClick={this.changeCerrar} >Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}

export default ListReclamos
