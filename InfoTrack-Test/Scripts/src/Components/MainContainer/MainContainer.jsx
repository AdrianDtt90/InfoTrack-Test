import React from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from "react-redux";

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';

// Custom Components
import GoogleSearcher from '../GoogleSearcher/GoogleSearcher.jsx';
import ResultsHistory from '../ResultsHistory/ResultsHistory.jsx';


//This subscribe the component to Redux store updates
const mapStateToProps = state => {
    return {
        showResultHistory: state.history.visibility
    };
};

//This component contain the main content of the application
//Display the GoogleSearcher and ResultsHistory
class MainContainer extends React.PureComponent {

    render() {
        const { classes, showResultHistory } = this.props;
        
        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={12} md={6} className={classes.grid}>

                    <Collapse in={!showResultHistory} >
                        <GoogleSearcher />
                    </Collapse >

                    <Collapse in={showResultHistory} >
                        <ResultsHistory />
                    </Collapse >

                </Grid>
            </Grid>
        );
    }
}

MainContainer.propTypes = {
    showResultHistory: PropTypes.boolean
};

const styles = theme => ({
    root: {
        padding: '20px'
    },
    grid: {
        boxShadow: '0px 0px 4px 0px #888888'
    }
});

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(MainContainer));