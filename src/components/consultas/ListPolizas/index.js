import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

const ListPolizas = (props) => {
 
    const { listOfNames } = props
    
    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup" >
                <Form.Row class="text-center">
                    <h3>Listado de Pólizas</h3>
                </Form.Row>
                    <hr/>
                <Form.Row>
                    <Col>
                       <Form.Label column sm={9}>Nombre del Cliente</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>Importe de la Póliza</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                {
                    listOfNames.map((policy) => {
                        return (
                            <Form.Row>
                                <Col>
                                    <Form.Label column sm={9}>{policy.name}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={9}>{policy.amount}</Form.Label>
                                </Col>
                            </Form.Row>
                        )
                    })
                }
                <hr/>
                 <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Pólizas:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalPoliza}</Form.Label>
                    </Col>
                </Form.Row>
           </Form.Group>
        </Container>
        )
}

const stateAProps = (state) => { 
//mapStateToProps nombre común para esta función
    return {
        listOfNames: state.listaDePolizas,
        totalPoliza: state.totalPoliza
    }
}

export default connect(stateAProps)(ListPolizas)
