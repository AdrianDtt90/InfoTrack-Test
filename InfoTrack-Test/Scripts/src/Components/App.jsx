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
import SnackbarManager from './SnackbarManager/SnackbarManager.jsx';



//import Store from "../Redux/store.jsx";
//import {
//    findResults
//} from "../Redux/actions.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/Home/getmensaje?url=wikipedia.org&keywords=aulica')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                debugger;
                Store.dispatch(findResults(myJson));
            });
    }
    render() {
        const { classes } = this.props;

        return (
            <div>
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