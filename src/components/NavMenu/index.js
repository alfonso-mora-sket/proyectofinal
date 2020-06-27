import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavMenu = () => {

    return(
        <Container>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    src="../../../logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                    Asegurodora ALFMOR
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/Poliza">
                            <Nav.Link href="#polizas">Polizas</Nav.Link>
                         </LinkContainer>
                         <LinkContainer to="/Reclamos">
                            <Nav.Link href="#reclamos">Reclamos</Nav.Link>
                         </LinkContainer>
                        <NavDropdown title="Consultas" id="collasible-nav-dropdown">
                            <LinkContainer to="/ListPolizas">
                                <NavDropdown.Item href="#ListPolizas">Listado de Pólizas</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/ListReclamos">
                                <NavDropdown.Item href="#ListReclamos">Listado de Reclamos</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/Fondos">
                                <NavDropdown.Item href="#Fondos">Fondos</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/AcercaDe">
                           <Nav.Link eventKey={2} href="#AcercaDe">Acerca de</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
    
}

export default NavMenu
