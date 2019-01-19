import './Header.scss'
import React, { Component } from 'react';
import { Button, Grid, Row, Col, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import { connect } from 'react-redux'
import { getVideos, saveMoveTitle } from '../../store/actions/searchVideoAction'


<<<<<<< HEAD
class Header extends Component {
=======
class Header extends React.Component {ł
>>>>>>> dorota
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
<<<<<<< HEAD
                <Navbar fixedTop={true} >
                    <Grid>
                        <Row>
                            <Col xs={2} sm={2} md={2} lg={2} >
                                <img src={ytlogo} alt="YouTube" className="img" />
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} >
                                <input
                                    onChange={this.saveTitleInState}
                                    className="input"
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
                            </Col>
                        </Row>
                    </Grid>


                </Navbar>
=======
                <div fixedTop={true} >  
                        <div>
                            <div className="header-body">
                                <div className="header-logo">
                                    <img src={logo} alt="YouTube" className="img" />
                                </div>
                                <div className="header-input">
                                    <input
                                        onChange={this.handleChange}
                                        /*    onChange={this.props.searchByChar(
                                                this.state.value
                                            )} */ // Ale to chyba było by zbyt piękne xD bo wali errorem że value jest null na początku
                                        className="input"
                                        placeholder="Szukaj..."
                                    />
                                    <Button className="Button"> <FontAwesomeIcon icon={faSearch} /> </Button>
                                </div>
                            </div>
                        </div>   

                       
                </div>
>>>>>>> dorota
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveTitleToStore: (payload) => dispatch(saveMoveTitle(payload)),
    searchMovie: (payload) => dispatch(getVideos(payload)),

});

export default connect(null, mapDispatchToProps)(Header) 