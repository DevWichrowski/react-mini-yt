import './Header.scss'
import React, { Component } from 'react';
import { Button, Grid, Row, Col, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import { connect } from 'react-redux'
import { getVideos, saveMoveTitle } from '../../store/actions/searchVideoAction'


class Header extends React.Component {ł
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }
    saveTitleInState = (e) => {
        this.setState({ value: e.target.value });
    }


    render() {

        return (
            <div className="Container">
                <div fixedTop={true} >  
                        <div>
                            <div className="header-body">
                                <div className="header-logo">
                                    <img src={logo} alt="YouTube" className="img" />
                                </div>
                                <div className="header-input">
                                    <input
                                        onChange={this.saveTitleInState}
                                        placeholder="Szukaj..."
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                this.props.saveTitleToStore(this.state.value)
                                            }
                                            if (event.key === 'Enter') {
                                                this.props.searchMovie(this.state.value)
                                            }
                                        }
                                        }
                                    />
                                    <Button className="Button"
                                    onClick={() => {
                                        this.props.saveTitleToStore(this.state.value)
                                        this.props.searchMovie(this.state.value)
                                    }}> <FontAwesomeIcon icon={faSearch} /> </Button>
                                </div>
                            </div>
                        </div>   

                       
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveTitleToStore: (payload) => dispatch(saveMoveTitle(payload)),
    searchMovie: (payload) => dispatch(getVideos(payload)),

});

export default connect(null, mapDispatchToProps)(Header) 