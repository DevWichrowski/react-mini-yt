import './Header.scss'
import React from 'react';
import { Button, Grid, Row, Col, Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ytlogo from '../../assets/ytLogo.jpg'
import { connect } from 'react-redux'


class Header extends React.Component {
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
    }
    render() {

        return (
            <div className="Container">
                <Navbar fixedTop={true} >  
                        <Grid>
                            <Row>
                                <Col xs={2} sm={2} md={2} lg={2} >
                                    <img src={ytlogo} alt="YouTube" className="img" />
                                </Col>
                                <Col xs={8} sm= {2} md={8} lg={8} >
                                    <input
                                        onChange={this.handleChange}
                                        /*    onChange={this.props.searchByChar(
                                                this.state.value
                                            )} */ // Ale to chyba było by zbyt piękne xD bo wali errorem że value jest null na początku
                                        className="input"
                                        placeholder="Szukaj..."
                                    />
                                    <Button className="Button"> <FontAwesomeIcon icon={faSearch} /> </Button>
                                </Col>
                            </Row>
                        </Grid>   

                       
                </Navbar>
            </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchByChar: (payload) => dispatch(/*Reducer*/(payload)),

});

export default connect(null, mapDispatchToProps)(Header) 