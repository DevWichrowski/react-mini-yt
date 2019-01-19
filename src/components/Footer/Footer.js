import React, { Component } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Grid, Row, Col } from 'react-bootstrap'
import StickyFooter from 'react-sticky-footer';



class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <StickyFooter bottomThreshold={50000}
                    normalStyles={{
                        backgroundColor: "#999999",
                        padding: "2rem"
                    }}
                    stickyStyles={{
                        backgroundColor: "rgba(255,255,255,.8)",
                        padding: "2rem"
                    }}
                >
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
                </StickyFooter>
            </div>
        )
    }
}

export default (Footer)