import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

import NavMenu from '../NavMenu'
import FooterPage from '../Footer';

import Factura from '../Factura'
import NotasCredito from '../NotasCredito'
import ListFacturas from '../Consultas/ListFacturas'
import ListNotasCredito from '../Consultas/ListNotasCredito'
import Balance from '../Consultas/Balance'
import AcercaDe from '../AcercaDe'

class App extends React.Component {

    render () {
 
        return(
            <Container className="container-fluid">
                <BrowserRouter>
                    <NavMenu></NavMenu>

                    <Route path="/Factura"          component={Factura}></Route>
                    <Route path="/NotasCredito"     component={NotasCredito}></Route>
                    <Route path="/ListFacturas"     component={ListFacturas}></Route>
                    <Route path="/ListNotasCredito" component={ListNotasCredito}></Route>
                    <Route path="/Balance"          component={Balance}></Route>
                    <Route path="/AcercaDe"         component={AcercaDe}></Route>

                    <FooterPage></FooterPage>
                </BrowserRouter>
            </Container>
        )
    }
}

export default App