import React from 'react'
import { Container, Button, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import {crearFactura, eliminarFactura} from '../Actions'
import '../Consultas/Styles/formGroup.css'

const Factura = (props) => {

    const nombreClienteRef = React.createRef()
    const importeRef = React.createRef()

    const handlerCreate = () => {
        const facturasObj = {
            nombreCliente: nombreClienteRef.current.value,
            importe: parseInt(importeRef.current.value)
        }
        props.crearFactura (facturasObj.nombreCliente, facturasObj.importe)
        nombreClienteRef.current.value = ''
        importeRef.current.value = ''
    }

    const handleDelete = () => {
        const nombreCliente = nombreClienteRef.current.value
        props.eliminarFactura(nombreCliente)
        nombreClienteRef.current.value = ''
        importeRef.current.value = ''
    }

    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row>
                    <h3>Captura de Facturas</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Form.Label column lg={2} >Nombre:</Form.Label>
                    <Col>
                        <Form.Control ref={nombreClienteRef} type="text" placeholder="Nombre del cliente" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column lg={2}>Importe:</Form.Label>
                    <Col>
                        <Form.Control ref={importeRef} type="numeric" placeholder="Importe de la factura" />
                    </Col>
                </Form.Row>
                <br />
                <hr/>
                <Form.Row>
                    <Col sm="6">
                        <Button variant="primary" onClick={handlerCreate}>Agregar Factura</Button>
                    </Col>
                    <Col sm="6">
                        <Button variant="primary" onClick={handleDelete}>Eliminar Factura</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
    </Container>
)

}

export default connect(null, {crearFactura, eliminarFactura})(Factura)

