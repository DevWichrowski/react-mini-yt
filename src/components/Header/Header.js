import './Header.scss'
import React from 'react';
import { Button, Grid, Row, Col, Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import { connect } from 'react-redux'


class Header extends React.Component {ł
    constructor(props) {
        super(props)

        this.setState = {
            value: ''
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
   /*     this.props.searchByChar(
            this.state.value
        ) */
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
            </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchByChar: (payload) => dispatch(/*Reducer*/(payload)),

});

export default connect(null, mapDispatchToProps)(Header) 