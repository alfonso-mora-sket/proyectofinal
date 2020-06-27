import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

import NavMenu from '../NavMenu'
import FooterPage from '../Footer';

import Poliza from '../Poliza'
import Reclamos from '../Reclamos'
import ListPolizas from '../consultas/ListPolizas'
import ListReclamos from '../consultas/ListReclamos'
import Fondos from '../consultas/Fondos'
import AcercaDe from '../AcercaDe'

const App = () => {
 
    return(
        <Container className="container-fluid">
            <BrowserRouter>
                <NavMenu></NavMenu>

                <Route path="/Poliza"       component={Poliza}></Route>
                <Route path="/Reclamos"     component={Reclamos}></Route>
                <Route path="/ListPolizas"  component={ListPolizas}></Route>
                <Route path="/ListReclamos" component={ListReclamos}></Route>
                <Route path="/Fondos"       component={Fondos}></Route>
                <Route path="/AcercaDe"     component={AcercaDe}></Route>

                <FooterPage></FooterPage>
            </BrowserRouter>
        </Container>
    )
}

export default (App)