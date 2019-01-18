import React, {Component} from 'react'
import './Header.scss'
import InputBase from '@material-ui/core/InputBase';



class Header extends Component {

    

    render() {
        return(
            <div>
                <InputBase 
                id="outlined-search"
                placeholder = "Szukaj"
                variant="outlined"
                margin="normal"
                />
            </div>
        )
    }
}

export default Header