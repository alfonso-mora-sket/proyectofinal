import React from 'react'
//import { Container } from 'react-bootstrap'

import Example2 from './Example2';

class ExampleApp extends React.Component{

    render(){
        const show = true;
        return(
            <Example2 show={show}/>
        )
    }
}

export default ExampleApp
