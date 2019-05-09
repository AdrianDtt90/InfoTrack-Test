import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

//Redux (to connect redux with react)
import { connect } from "react-redux";

// Material UI
// Core
import { withStyles } from '@material-ui/core/styles';
// Components
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

//Redux Actions
import {
    hideMessage
} from "../../Redux/actions.jsx";

//This subscribe the component to Redux store updates
const mapStateToProps = state => {
    return {
        message: state.message.text,
        typeMessage: state.message.typeMessage,
        show: state.message.show,
    };
};

//This sets functions to dispatch actions to the store
const mapDispatchToProps = dispatch => ({
    hideMessage: () => {
        dispatch(hideMessage());
    }
});

//This component manages the behavior of the messages in the application
class SnackbarManager extends React.PureComponent {

    //Hide the snackbar after 5 sec or when the user click in the "close" button
    handleClose = () => {
        this.props.hideMessage();
    }

    render() {
        const { classes, message, typeMessage, show } = this.props;
        
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={show || false}
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <Button className={classNames(classes.text, classes.buttonText)} key="undo" color="secondary" size="small" onClick={this.handleClose}>Close</Button>
                    ]}
                    ContentProps={{
                        classes: {
                            root: classNames(typeMessage == 'ok' ? classes.containerOK : classes.containerError, classes.text)
                        }
                    }}
                />
            </div>
        );
    }
}

SnackbarManager.defaultProps = {
    show: false
};

SnackbarManager.propTypes = {
    message: PropTypes.string,
    typeMessage: PropTypes.string,
    show: PropTypes.boolean
}

const styles = theme => ({
    containerOK: {
        background: theme.palette.ok.main
    },
    containerError: {
        background: theme.palette.error.main
    },
    text: {
        fontSize: '14px'
    },
    buttonText: {
        color: '#fff'
    },
    close: {
        padding: theme.spacing.unit / 2,
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SnackbarManager));