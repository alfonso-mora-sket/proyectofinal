import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

import '../../Consultas/Styles/listGroup.css'
import '../../Consultas/Styles/formheader.css'

const ListFacturas = (props) => {
 
    return(
        <Container className="container-fluid">
            <Form.Group className="listGroup" >
                <Form.Row class="formheader">
                    <h3>Listado de Facturas</h3>
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
                    props.listaDeFacturas.map((factura) => {
                        return (
                            <Form.Row>
                                <Col>
                                    <Form.Label column sm={10}>{factura.nombreCliente}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={10}>{factura.concepto}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={10}>{factura.importe}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={10}>{factura.estado}</Form.Label>
                                </Col>
                            </Form.Row>
                        )
                    })
                }
                <hr/>
                 <Form.Row>
                    <Col>
                        <Form.Label column sm={10}>Total Facturas:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={10}>${props.totalFactura}</Form.Label>
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
