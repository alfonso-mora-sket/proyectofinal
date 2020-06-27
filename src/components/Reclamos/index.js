import React from 'react'
import { Container, Button, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import {crearReclamo, eliminarReclamo} from '../Actions'

import '../consultas/Styles/formGroup.css'

const Reclamos = (props) => {

    const nameRef = React.createRef()
    const amountRef = React.createRef()

    const handleCreate = () => {
        const infoObj = {
            name: nameRef.current.value,
            amount: parseInt(amountRef.current.value)
        }
        props.crearReclamo(infoObj)
        nameRef.current.value = ''
        amountRef.current.value = ''
    }

    const handleDelete = () => {
        const name = nameRef.current.value
        props.eliminarReclamo(name)
    }

    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row>
                    <h3>Captura de Reclamos</h3>
                    </Form.Row>
                    <hr/>
                <Form.Row>
                    <Form.Label column sm={2}>Nombre:</Form.Label>
                    <Col>
                        <Form.Control ref={nameRef} type="text" placeholder="Nombre del cliente" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column sm={2}>Importe:</Form.Label>
                    <Col>
                        <Form.Control ref={amountRef} type="numeric" placeholder="Importe del Reclamo" />
                    </Col>
                </Form.Row>
                <br />
                <hr/>
                <Form.Row>
                    <Col sm="6">
                        <Button variant="primary" onClick={handleCreate}>Agregar Reclamo</Button>
                    </Col>
                    <Col sm="6">
                        <Button onClick={handleDelete} variant="primary" >Eliminar Reclamo</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
        </Container>
    )

}

export default connect(null, {crearReclamo, eliminarReclamo})(Reclamos)

