import React from 'react';

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


const mapStateToProps = state => {
    return {
        showResultHistory: state.history.visibility
    };
};

const mapDispatchToProps = dispatch => ({
    //mostrarCargando: (cargar) => {
    //    dispatch(mostrarCargando(cargar));
    //},
});

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, showResultHistory } = this.props;
        console.log("showResultHistory " + showResultHistory);
        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={6} ms={6}>

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

};

const styles = theme => ({
    root: {
        padding: '10px'
    }
});

connect

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MainContainer));