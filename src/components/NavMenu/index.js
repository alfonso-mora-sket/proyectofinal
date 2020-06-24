import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import Poliza from '../Poliza'
import Reclamos from '../Reclamos'
import ListPoliza from '../consultas/ListPoliza'
import ListReclamos from '../consultas/ListReclamos'
import Fondos from '../consultas/Fondos'
import AcercaDe from '../AcercaDe'

class NavMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    handlePoliza = () => {
        this.PolizaRef.handleMostrar();
    }

    handleReclamos = () => {
        this.ReclamosRef.handleMostrar();
    }

    handleListPoliza = () => {
        this.ListPolizaRef.handleMostrar();
    }

    handleListReclamos = () => {
        this.ListReclamosRef.handleMostrar();
    }

    handleFondos = () => {
        this.FondosRef.handleMostrar();
    }

    handleAcercaDe = () => {
        this.AcercaDeRef.handleMostrar();
    }

    render () {
        return(
            <Container>
 
                <Poliza       ref={element => {this.PolizaRef = element}}/> 
                <Reclamos     ref={element => {this.ReclamosRef = element}}/> 
                <ListPoliza   ref={element => {this.ListPolizaRef = element}}/> 
                <ListReclamos ref={element => {this.ListReclamosRef = element}}/> 
                <Fondos       ref={element => {this.FondosRef = element}}/>
                <AcercaDe     ref={element => {this.AcercaDeRef = element}}/> 
 
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Asegurodora ALFMOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#polizas" onClick = {this.handlePoliza}>
                                 Polizas
                            </Nav.Link>
                            <Nav.Link href="#reclamos" onClick = {this.handleReclamos}>
                                Reclamos
                            </Nav.Link>
                            <NavDropdown title="Consultas" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#ListPoliza" onClick = {this.handleListPoliza}>Listado de Pólizas</NavDropdown.Item>
                                <NavDropdown.Item href="#ListReclamos" onClick = {this.handleListReclamos}>Listado de Reclamos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#aFinanzas" onClick = {this.handleFondos}>Finanzas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#AcercaDe" onClick = {this.handleAcercaDe}>Acerca de</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Container>
        )
    }
    
}

export default NavMenu
