import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './footerPage.css'

class FooterPage extends React.Component {

    render () {

        return(
            <Container className="footer">
                <Row>
                    <Col sm="2">
                                <h5>Referencias:</h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <Button 
                            className="footer-btn" 
                            href="https://react-bootstrap.github.io" 
                            target="_blank"
                            rel="noopener noreferrer">
                            React-Bootstrap
                        </Button>
                    </Col>
                    <Col sm="4">The most popular front-end framework</Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <Button 
                            className="footer-btn" 
                            href="https://getbootstrap.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            Bootstrap
                        </Button>
                    </Col>
                    <Col sm="4">Build fast, responsive sites with Bootstrap.</Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <Button 
                            className="footer-btn" 
                            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es"
                            target="_blank"
                            rel="noopener noreferrer">
                            React Developer Tools
                        </Button>
                    </Col>
                    <Col sm="6">React Developer Tools is a Chrome DevTools extension for the open-source.</Col>
                </Row>
                <Row>
                    <Col sm="2">
                        <Button 
                            className="footer-btn" 
                            href="https://react-redux.js.org/introduction/quick-start"
                            target="_blank"
                            rel="noopener noreferrer">
                            React Redux
                        </Button>
                    </Col>
                    <Col sm="8">It lets your React components read data from a Redux store, and dispatch actions to the store to update data.</Col>
                </Row>
            </Container>
        )
    }
}

export default FooterPage