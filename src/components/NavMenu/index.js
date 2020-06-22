import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import Poliza from '../Poliza'
import Reclamos from '../Reclamos'
import ListPoliza from '../consultas/ListPoliza'
import ListReclamos from '../consultas/ListReclamos'
import Fondos from '../consultas/Fondos'
import AcercaDe from '../AcercaDe'

class NavMenu extends React.Component {

    render () {
        return(
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Asegurodora ALFMOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#polizas" onClick = {Poliza}>Polizas</Nav.Link>
                            <Nav.Link href="#reclamos" onClick = {Reclamos}>Reclamos</Nav.Link>
                            <NavDropdown title="Consultas" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick = {ListPoliza}>Listado de Pólizas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" onClick = {ListReclamos}>Listado de Reclamos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" onClick = {Fondos}>Finanzas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes" onClick = {AcercaDe}>Acerca de</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Container>
        )
    }
    
}

export default NavMenu
