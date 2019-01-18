import './Header.scss'
import React from 'react';
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


class Header extends React.Component {

    render() {
        return (
            
            <div className="Header">
                <Grid > 
                                       
                    <SearchIcon />           
                    <InputBase
                    placeholder="Search…"

                />
            
            </Grid>
            </div>
        );
    }
}


export default Header