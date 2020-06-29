import React from 'react'
import {Container, Button, Form, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {crearNotaCredito, cancelarNotaCredito} from '../Actions'
import '../Consultas/Styles/formGroup.css'
import '../Consultas/Styles/formheader.css'

const NotasCredito = (props) => {

    const nombreClienteRef = React.createRef()
    const conceptoRef = React.createRef()
    const importeRef = React.createRef()

    const handlerCreate = () => {
        const notasObj = {
            nombreCliente: nombreClienteRef.current.value,
            concepto: conceptoRef.current.value,
            importe: parseInt(importeRef.current.value)
        }
        props.crearNotaCredito(notasObj)
        nombreClienteRef.current.value = ''
        conceptoRef.current.value = ''
        importeRef.current.value = ''
    }

    const handlerDelete = () => {
        const nombreCliente = nombreClienteRef.current.value
        props.cancelarNotaCredito(nombreCliente)
        nombreClienteRef.current.value = ''
        conceptoRef.current.value = ''
        importeRef.current.value = ''
    }

    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row class="formheader">
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
                    <Form.Label column sm={2}>Concepto:</Form.Label>
                    <Col>
                        <Form.Control ref={conceptoRef} type="text" placeholder="Concepto" />
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
                    <Col sm="4">
                        <Button variant="info" onClick={handlerCreate}>Agregar Nota de Crédito</Button>
                    </Col>
                    <Col sm="4">
                        <Button onClick={handlerDelete} variant="info" >Cancelar Nota de Crédito</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        </Container>
    )

}

export default connect(null, {crearNotaCredito, cancelarNotaCredito})(NotasCredito)

