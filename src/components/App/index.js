import React from 'react'
//import ReactDom from 'react-dom'
import { Container } from 'react-bootstrap'

//import Redux from '../Redux';
import NavMenu from '../NavMenu'
import FooterPage from '../Footer';
import Poliza from '../Poliza';

class App extends React.Component{

    render(){
        return(
            <Container>
                <NavMenu></NavMenu>
                <Poliza></Poliza>
                <FooterPage></FooterPage>
            </Container>
        )
    }
}

export default App