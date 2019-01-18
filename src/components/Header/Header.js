import './Header.scss'
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ytlogo from '../../assets/ytLogo.jpg'
import AppBar from '@material-ui/core/AppBar/AppBar'

const styles = theme => ({
    root: {
        width: "100%",
    },
    inputbase: {
        borderStyle: "ridge",
        width: "40%", [theme.breakpoints.down("md")]: {
            width: "60%"
        },
        [theme.breakpoints.down("sm")]: {
            width: "80%"
        },
        height: 35,
    },
    padding: {
        paddingTop: "10px"
    },
    button: {
        marginLeft: "-64px",

    }
})

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed" color="inherit"> 
            <Grid container className={classes.root} >
                <Grid xs={12}>
                    <Grid container justify="center" className={classes.padding}>
                        <img src={ytlogo} alt="YouTube" />
                        <InputBase className={classes.inputbase}
                            placeholder="Szukaj..."

                        />
                        <Button size="small" className={classes.button}> <SearchIcon /> </Button>
                    </Grid>
                </Grid>
            </Grid>
            </AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)