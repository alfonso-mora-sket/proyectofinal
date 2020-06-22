import React from 'react'
//import { Container } from 'react-bootstrap'

import Example from './Example';

class ExampleApp extends React.Component{

    render(){
        return(
            <div>
                <Example mostrar = {true} />
            </div>
        )
    }
}

export default ExampleApp
