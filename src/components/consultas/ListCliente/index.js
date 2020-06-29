import React from 'react'
import {Container, Form, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import '../../Consultas/Styles/listGroup.css'
import '../../Consultas/Styles/formheader.css'
import {getClientes} from '../../Actions'

class ListCliente extends React.Component{

    componentDidMount(){
        this.props.getClientes()
    }

    render(){
     
        return(
            <Container className="container-fluid">
                <Form.Group className="listGroup" >
                    <Form.Row class="formheader">
                        <h3>Listado de Clientes</h3>
                    </Form.Row>
                    <hr/>
                    <Form.Row>
                        <Col>
                        <Form.Label column sm={10}>Nombre del Cliente</Form.Label>
                        </Col>
                        <Col>
                        <Form.Label column sm={10}>Dirección electrónica</Form.Label>
                        </Col>
                    </Form.Row>
                    <hr/>
                    {
                        this.props.clientes.map((cliente) => {
                            return (
                                <Form.Row key={cliente.id}>
                                    <Col>
                                        <Form.Label column sm={10}>{ cliente.name }</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Label column sm={10}>{ cliente.email }</Form.Label>
                                    </Col>
                                </Form.Row>
                            )
                        })
                    }
                </Form.Group>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clientes: state.clientes
    }
}

export default connect(mapStateToProps, {getClientes})(ListCliente)
