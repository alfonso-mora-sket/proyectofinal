import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const Fondos = (props) => {
 
    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row class="text-center">
                    <h3>Fondos</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Polizas:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalPoliza}</Form.Label>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Reclamos:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>$({props.totalReclamos})</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Fondos:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalFinanzas}</Form.Label>
                    </Col>
                </Form.Row>
           </Form.Group>
        </Container>
        )
}

const mapStateToProps = (state) => {
    return {
        totalPoliza: state.totalPoliza,
        totalReclamos: state.totalReclamos,
        totalFinanzas: state.totalFinanzas
    }
}

export default connect(mapStateToProps)(Fondos)
