import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import '../../Consultas/Styles/formGroup.css'

const ListFacturas = (props) => {
 
    const { listaDeFacturas } = props
    
    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup" >
                <Form.Row class="text-center">
                    <h3>Listado de Facturas</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                       <Form.Label column sm={9}>Nombre del Cliente</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>Importe de la Factura</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                {
                    listaDeFacturas.map((factura) => {
                        return (
                            <Form.Row>
                                <Col>
                                    <Form.Label column sm={9}>{factura.nombreCliente}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={9}>{factura.importe}</Form.Label>
                                </Col>
                            </Form.Row>
                        )
                    })
                }
                <hr/>
                 <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Facturas:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalFactura}</Form.Label>
                    </Col>
                </Form.Row>
           </Form.Group>
        </Container>
        )
}

const stateAProps = (state) => { 
    return {
        listaDeFacturas: state.listaDeFacturas,
        totalFactura:    state.totalFactura
    }
}

export default connect(stateAProps)(ListFacturas)
