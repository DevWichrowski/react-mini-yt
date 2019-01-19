import React, { Component } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Panel, Navbar, Grid, Row, Col } from 'react-bootstrap'




class Footer extends Component {

    render() {
        return (
            <div className="fixed-bottom">
                <Navbar fixedBottom={true}>
                    <Panel >
                        <Panel.Footer>
                            <Grid>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <a href=" " ><FontAwesomeIcon icon={faGithub} /> ?????????? </a>
                                        <a href=" " ><FontAwesomeIcon icon={faLinkedin} /> ????????? </a>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <a href=" " ><FontAwesomeIcon icon={faGithub} /> ?????????? </a>
                                        <a href=" " ><FontAwesomeIcon icon={faLinkedin} /> ????????? </a>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel.Footer>
                        <Panel.Footer>
                            <Grid>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <a href=" " ><FontAwesomeIcon icon={faGithub} /> ?????????? </a>
                                        <a href=" " ><FontAwesomeIcon icon={faLinkedin} /> ????????? </a>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <a href=" " ><FontAwesomeIcon icon={faGithub} /> ?????????? </a>
                                        <a href=" " ><FontAwesomeIcon icon={faLinkedin} /> ????????? </a>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel.Footer>
                    </Panel>
                </Navbar>
            </div>
        )
    }
}

export default (Footer)