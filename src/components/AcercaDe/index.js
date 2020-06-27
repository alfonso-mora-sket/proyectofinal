import React from 'react'
import { Container, Form} from 'react-bootstrap'

import '../consultas/Styles/formGroup.css'

const AcercaDe = () => {

    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup">
                <Form.Row class="text-center">
                    <h3>Academia Digital</h3>
                </Form.Row>
                <hr/>
                <Form.Row class="text-center">
                    <h4>Curso HTML, CSS y React</h4>
                </Form.Row>
                <hr/>
                <Form.Row  class="text-center">
                    <h5>José Alfonso Mora Beltrán</h5>
                </Form.Row>
                <br/>
                <Form.Row  class="text-right">
                    <h6>Junio de 2020</h6>
                </Form.Row>
            </Form.Group>
        </Container>
    )
}

export default (AcercaDe)
