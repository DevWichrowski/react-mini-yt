import './Header.scss'
import React from 'react';
import { Button, Navbar, NavItem,Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ytlogo from '../../assets/ytLogo.jpg'


class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Navbar collapseOnSelect className="NavBar">
                <Navbar.Collapse>
                <Nav>
                    <NavItem>
                    <img src={ytlogo} alt="YouTube" />
                    </NavItem>
                </Nav>
                    <Nav>
                        <NavItem > <input className="input"
                            placeholder="Szukaj..."
                        />  
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                        <Button className="Button"> <FontAwesomeIcon icon={faSearch} /> </Button>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header