import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import '../../Consultas/Styles/formGroup.css'

const Balance = (props) => {
 
    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row class="text-center">
                    <h3>Balance</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Polizas:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalFactura}</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Reclamos:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>$({props.totalNotasCredito})</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Balance:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalBalance}</Form.Label>
                    </Col>
                </Form.Row>
           </Form.Group>
        </Container>
        )
}

const mapStateToProps = (state) => {
    return {
        totalFactura:      state.totalFactura,
        totalNotasCredito: state.totalNotasCredito,
        totalBalance:      state.totalBalance
    }
}

export default connect(mapStateToProps)(Balance)
