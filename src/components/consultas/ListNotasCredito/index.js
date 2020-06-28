import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import '../../Consultas/Styles/formGroup.css'

const ListNotasCredito = (props) => {
 
    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup" > 
                <Form.Row class="text-center">
                    <h3>Listado de Notas de Crédito</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                       <Form.Label column sm={9}>Nombre del Cliente</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>Importe de la Nota de Crédito</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                {
                    props.listaDeNotasCredito.map((NotaCredito) => {
                        return (
                            <Form.Row>
                                <Col>
                                    <Form.Label column sm={9}>{NotaCredito.nombreCliente}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={9}>{NotaCredito.importe}</Form.Label>
                                </Col>
                            </Form.Row>
                        )
                    })
                }
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Notas de Crédito:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalNotasCredito}</Form.Label>
                    </Col>
                </Form.Row>
           </Form.Group>
        </Container>
        )
}

const mapStateToProps = (state) => {
    return  {
        listaDeNotasCredito: state.listaDeNotasCredito,
        totalNotasCredito:   state.totalNotasCredito
    }
}

export default connect(mapStateToProps)(ListNotasCredito)

