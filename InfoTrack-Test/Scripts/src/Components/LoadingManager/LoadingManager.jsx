import React from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from "react-redux";

// Material UI
// Core
import { withStyles } from '@material-ui/core/styles';
// Components
import CircularProgress from '@material-ui/core/CircularProgress';

//Redux Actions
import {
    hideMessage
} from "../../Redux/actions.jsx";

//This subscribe the component to Redux store updates
const mapStateToProps = state => {
    return {
        show: state.loading.show,
    };
};

//This sets functions to dispatch actions to the store
const mapDispatchToProps = dispatch => ({
    hideMessage: () => {
        dispatch(hideMessage());
    }
});

//This component shows the CircularProgress
function LoadingManager(props) {
    const { classes, show } = props;

    return (
        <React.Fragment>
            {show &&
                <div className={classes.root} >
                    <CircularProgress className={classes.progress} color="secondary" />
                </div>
            }
        </React.Fragment>
    );
}

LoadingManager.propTypes = {
    show: PropTypes.boolean
};

const styles = theme => ({
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(218, 218, 218, 0.5)',
        zIndex: '9999999'
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LoadingManager));