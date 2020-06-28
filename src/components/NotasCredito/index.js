import React from 'react'
import { Container, Button, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import {crearNotaCredito, eliminarNotaCredito} from '../Actions'
import '../Consultas/Styles/formGroup.css'

const NotasCredito = (props) => {

    const nombreClienteRef = React.createRef()
    const importeRef = React.createRef()

    const handleCreate = () => {
        const notasObj = {
            nombreCliente: nombreClienteRef.current.value,
            importe: parseInt(importeRef.current.value)
        }
        props.crearNotaCredito(notasObj)
        nombreClienteRef.current.value = ''
        importeRef.current.value = ''
    }

    const handleDelete = () => {
        const nombreCliente = nombreClienteRef.current.value
        props.eliminarNotaCredito(nombreCliente)
        nombreClienteRef.current.value = ''
        importeRef.current.value = ''
    }

    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row>
                    <h3>Captura de NotasCredito</h3>
                    </Form.Row>
                    <hr/>
                <Form.Row>
                    <Form.Label column sm={2}>Nombre:</Form.Label>
                    <Col>
                        <Form.Control ref={nombreClienteRef} type="text" placeholder="Nombre del cliente" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column sm={2}>Importe:</Form.Label>
                    <Col>
                        <Form.Control ref={importeRef} type="numeric" placeholder="Importe de la Nota de Crédito" />
                    </Col>
                </Form.Row>
                <br />
                <hr/>
                <Form.Row>
                    <Col sm="6">
                        <Button variant="primary" onClick={handleCreate}>Agregar Nota de Crédito</Button>
                    </Col>
                    <Col sm="6">
                        <Button onClick={handleDelete} variant="primary" >Eliminar Nota de Crédito</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        </Container>
    )

}

export default connect(null, {crearNotaCredito, eliminarNotaCredito})(NotasCredito)

