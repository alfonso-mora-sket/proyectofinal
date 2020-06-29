import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import '../../Consultas/Styles/listGroup.css'
import '../../Consultas/Styles/formheader.css'

const ListNotasCredito = (props) => {
 
    return(
        <Container className="container-fluid">
            <Form.Group className="listGroup" > 
                <Form.Row class="formheader">
                    <h3>Listado de Notas de Crédito</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                       <Form.Label column sm={10}>Nombre del Cliente</Form.Label>
                    </Col>
                    <Col>
                       <Form.Label column sm={10}>Concepto</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={10}>Importe</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={10}>Estado</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                {
                    props.listaDeNotasCredito.map((NotaCredito) => {
                        return (
                            <Form.Row>
                                <Col>
                                    <Form.Label column sm={10}>{NotaCredito.nombreCliente}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={10}>{NotaCredito.concepto}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={10}>{NotaCredito.importe}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={10}>{NotaCredito.estado}</Form.Label>
                                </Col>
                            </Form.Row>
                        )
                    })
                }
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={10}>Total Notas Crédito:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={10}>${props.totalNotasCredito}</Form.Label>
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

