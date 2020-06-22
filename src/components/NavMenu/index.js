import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

//import Redux from '../Redux'
import Poliza from '../Poliza'

function NavMenu () {

    
        return(
            <Container>
                {/* <Redux/> */}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Asegurodora ALFMOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#polizas" onClick = {Poliza(true)}>
                                 Polizas
                            </Nav.Link>
                            <Nav.Link href="#reclamos">Reclamos</Nav.Link>
                            <NavDropdown title="Consultas" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Listado de Pólizas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Listado de Reclamos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Finanzas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Contacto</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Acerca de</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Container>
        )
    
}

export default NavMenu
