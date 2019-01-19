import React, { Component } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import StickyFooter from 'react-sticky-footer';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
           clicked: false,
           style: 'small',
           contentSyle: 'single',
           creatorsStyle: 'hidden'
        }
    }

    getStyle = () => {
        if (!this.state.clicked) {
            this.setState({ style: 'big', clicked: true, contentSyle: 'double', creatorsStyle: 'showed' });
        } else {
            this.setState({ style: 'small', clicked: false, contentSyle: 'single', creatorsStyle: 'hidden' });
        }
    }

    render() {
        return (
            <div className={this.state.style}>
              <button className="footer-button"> <FontAwesomeIcon icon={faCopyright} /> </button>
              <div className="footer-content">
              <div className={this.state.contentSyle} onClick={() => {
                this.getStyle()
            }}>
              Made by AnticaTeam, all rights reserved. {new Date().getFullYear()} {this.state.style === 'small' ? <div class="more-info">Click to see more info.</div> : null}
              </div>
              <div className={this.state.creatorsStyle}>
                <div className="creator"><FontAwesomeIcon icon={faGithub} /><div className="creator-link"><a href="https://github.com/DevWichrowski">https://github.com/DevWichrowski</a></div></div>
                <div className="creator"><FontAwesomeIcon icon={faGithub} /><div className="creator-link"><a href="https://github.com/RadekGluchowski">https://github.com/RadekGluchowski</a></div></div>
              </div>
              </div>
            </div>
        )
            }
}

export default Footer;