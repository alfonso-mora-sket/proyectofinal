import React from 'react'
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap'

class AcercaDe extends React.Component {
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
                        <Modal.Title>Academia Digital</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Curso HTML, CSS y React</p>
                        <br/>
                        <p>José Alfonso Mora Beltrán</p>
                        <br/>
                        <a>${Date.now()}</a>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.changeCerrar}>Close</Button>
                    </Modal.Footer>                
                </Modal>
            </Container>
        )
    }
}

export default AcercaDe
