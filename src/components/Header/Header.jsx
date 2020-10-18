import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ color: "#000000", backgroundColor: "#26c6da" }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        RiMA
                    </Typography>
                    <Button color="inherit">
                        <SettingsIcon /> 設定
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}