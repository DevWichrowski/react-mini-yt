import React, { Component } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import StickyFooter from 'react-sticky-footer';

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
           clicked: false,
           style: 'small'
        }
    }

    getStyle = () => {
        if (!this.state.clicked) {
            this.setState({ style: 'big', clicked: true });
        } else {
            this.setState({ style: 'small', clicked: false });
        }
    }

    render() {
        return (
            <div className={this.state.style}  onClick={() => {
                this.getStyle()
            }}>
                {/* <StickyFooter bottomThreshold={50000}>
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
                </StickyFooter> */}
            </div>
        )
            }
}

export default Footer;