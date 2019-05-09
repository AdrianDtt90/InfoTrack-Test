import React from 'react';

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

// Custom Components
import MainContainer from './MainContainer/MainContainer.jsx';
import LoadingManager from './LoadingManager/LoadingManager.jsx';
import SnackbarManager from './SnackbarManager/SnackbarManager.jsx';


//This component is the root of the application
class App extends React.PureComponent {
    
    render() {
        const { classes } = this.props;

        return (
            <div>
                <LoadingManager />
                <SnackbarManager />               

                <AppBar position="static" color="default">
                    <Toolbar>

                        <img className={classes.imgInfoTrack} src="https://www.infotrack.com.au/wp-content/uploads/InfoTrack_logo_blue_v2_cropped_rgb.png" />

                        <Typography variant="h4" color="inherit">Test</Typography>

                    </Toolbar>
                </AppBar>


                <MainContainer />

            </div>
        );
    }
}

const styles = theme => ({
    imgInfoTrack: {
        padding: '12px'
    }
});

export default withStyles(styles)(App);