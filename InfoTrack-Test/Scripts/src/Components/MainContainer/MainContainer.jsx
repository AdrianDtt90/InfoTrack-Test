import React from 'react';

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Grid from '@material-ui/core/Grid';

// Custom Components
import GoogleSearcher from '../GoogleSearcher/GoogleSearcher.jsx';
import ResultsHistory from '../ResultsHistory/ResultsHistory.jsx';

class MainContainer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={6} ms={6}>

                    <GoogleSearcher />

                    <br/>

                    <ResultsHistory />

                </Grid>
            </Grid>
        );
    }
}

MainContainer.propTypes = {

};

const styles = theme => ({
    root: {
        padding: '10px'
    }
});

export default withStyles(styles)(MainContainer);