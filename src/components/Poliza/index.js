import React from 'react'
import { Container, Button, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import {crearPoliza, eliminarPoliza} from '../Actions'

import '../consultas/Styles/formGroup.css'

const Poliza = (props) => {

    const nameRef = React.createRef()
    const amountRef = React.createRef()

    const handlerCreate = () => {
        const policyObj = {
            name: nameRef.current.value,
            amount: parseInt(amountRef.current.value)
        }
        props.crearPoliza(policyObj.name, policyObj.amount)
        nameRef.current.value = ''
        amountRef.current.value = ''
    }

    const handleDelete = () => {
        const name = nameRef.current.value
        props.eliminarPoliza(name)
    }

    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row>
                    <h3>Captura de Pólizas</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Form.Label column lg={2} >Nombre:</Form.Label>
                    <Col>
                        <Form.Control ref={nameRef} type="text" placeholder="Nombre del cliente" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column lg={2}>Importe:</Form.Label>
                    <Col>
                        <Form.Control ref={amountRef} type="numeric" placeholder="Importe de la póliza" />
                    </Col>
                </Form.Row>
                <br />
                <hr/>
                <Form.Row>
                    <Col sm="6">
                        <Button variant="primary" onClick={handlerCreate}>Agregar Póliza</Button>
                    </Col>
                    <Col sm="6">
                        <Button variant="primary" onClick={handleDelete}>Eliminar Póliza</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
    </Container>
)

}

export default connect(null, {crearPoliza, eliminarPoliza})(Poliza)

