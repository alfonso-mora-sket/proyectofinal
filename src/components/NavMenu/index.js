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
                Conta Plus
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/Factura">
                            <Nav.Link href="#Facturas">Facturas</Nav.Link>
                         </LinkContainer>
                         <LinkContainer to="/NotasCredito">
                            <Nav.Link href="#NotasCredito">Notas de Creditos</Nav.Link>
                         </LinkContainer>
                        <NavDropdown title="Consultas" id="collasible-nav-dropdown">
                            <LinkContainer to="/ListFacturas">
                                <NavDropdown.Item href="#ListFacturas">Listado Facturas</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/ListNotasCredito">
                                <NavDropdown.Item href="#ListNotasCredito">Listado Notas de Creditos</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/Balance">
                                <NavDropdown.Item href="#Balance">Balance</NavDropdown.Item>
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
