import React from 'react';

//Redux
import { connect } from "react-redux";

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

// Custom Components
import GoogleSearcherResults from '../GoogleSearcherResults/GoogleSearcherResults.jsx';

//Redux Actions
import {
    showResultHistory,
    showMessage,
    showLoading,
    hideLoading,
    addResultHistory
} from "../../Redux/actions.jsx";

//This sets functions to dispatch actions to the store
const mapDispatchToProps = dispatch => ({
    goToHistory: () => {
        dispatch(showResultHistory());
    },
    getResults: (submitRequest) => {
        dispatch(submitRequest());
    },
    showMessage: (message, type) => {
        dispatch(showMessage(message, type));
    },
    showLoading: () => {
        dispatch(showLoading());
    },
    hideLoading: () => {
        dispatch(hideLoading());
    },
    addResultHistory: (data) => {
        dispatch(addResultHistory(data));
    }
});


//This component display the inputs to search in google
class GoogleSearcher extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: '',
            searching: true,
            url: '',
            keywords: '',
            urlError: false,
            keywordsError: false
        }
    }

    //This handle the inputs onChange event
    handleInput = (event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }

    //This retrive the inputs values and validate the form
    handleFindResults = () => {
        const { searching } = this.state;
        const { getResults, showMessage } = this.props;

        //If we are not searching we do not continue
        if (!searching) return false;

        //If the inputs are valid we continue
        if (this.validInputs()) {
            getResults(this.submitRequest)
        } else {
            showMessage('Check the inputs, there are invalid fields.', 'error');
        }
    }

    //This fetch the results from backend and display the result on the screen
    submitRequest = () => {
        const { url, keywords } = this.state;
        const { showMessage, showLoading, hideLoading, addResultHistory } = this.props;
        
        showLoading();
        
        return (dispatch) => {
            return fetch(`/home/getsearchresult?url=${url}&keywords=${keywords}`)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {

                    this.setState({
                        result: result,
                        searching: false,
                        urlError: false,
                        keywordsError: false
                    }, () => {
                        addResultHistory({ url, keywords, result });
                        hideLoading();
                        showMessage('¡Successful response!', 'ok');
                    });

                })
                .catch((error) => {
                    hideLoading();
                    showMessage('Error trying to fetch the results.', 'error');
                });
        };
    }

    //This validates each entry and verifies if we can continue with the search.
    validInputs = () => {
        const { url, keywords } = this.state;
        let error = {};

        this.setState({
            urlError: false,
            keywordsError: false
        });

        //URL Validation
        if (url == '' || !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url)) {
            error = { ...error, urlError: true };
        }

        //Keywords Validation
        if (keywords == '') {
            error = { ...error, keywordsError: true };
        }

        //If there are errors we show them
        if (Object.keys(error).length !== 0) {
            this.setState(error);
            return false;
        }

        return true;
    }

    //Reset the state
    handleReset = () => {
        this.setState({
            result: '',
            searching: true,
            url: '',
            keywords: '',
            urlError: false,
            keywordsError: false
        });
    }

    //This show the ResultsHistory component and hide this component
    handleGoToHistory = () => {
        this.props.goToHistory();
    }

    render() {
        const { classes } = this.props;
        const { searching, url, keywords, urlError, keywordsError, result } = this.state;

        return (
            <div {...this.props}>
                <Card>
                    <CardContent>
                        <Fab onClick={this.handleGoToHistory} size="small" color="primary" aria-label="Add" className={classes.goToHistoryButton}>
                            <i class="material-icons">list</i>
                        </Fab>

                        <Typography variant="h2" color="inherit">
                            Google Search Results
                        </Typography>

                        <Typography variant="h5" color="inherit" className={classes.infomationText}>
                            With "Google Search Results" you can know how many times and in what positions a certain URL is found according to a certain search.
                        </Typography>

                        <TextField
                            id="url"
                            label="URL to search"
                            className={classes.input}
                            placeholder="i.e. www.infotrack.com.au"
                            value={url}
                            onChange={(e) => this.handleInput(e, 'url')}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            InputProps={{
                                maxLength: 50,
                                classes: {
                                    root: classes.inputText
                                }
                            }}
                            error={urlError}
                            disabled={!searching}
                        />

                        <TextField
                            id="keywords"
                            label="Keywords"
                            className={classes.input}
                            placeholder="i.e. online title search"
                            value={keywords}
                            onChange={(e) => this.handleInput(e, 'keywords')}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                                classes: {
                                    root: classes.inputLabel
                                }
                            }}
                            InputProps={{
                                maxLength: 50,
                                classes: {
                                    root: classes.inputText
                                }
                            }}
                            error={keywordsError}
                            disabled={!searching}
                        />

                        {!searching && <React.Fragment>
                            <hr />

                            <GoogleSearcherResults url={url} keywords={keywords} result={result} />
                        </React.Fragment>}

                    </CardContent>
                    <CardActions className={classes.buttonsContainer}>
                        <Button onClick={this.handleReset} disabled={searching} variant="contained" color="secondary" className={classes.button}>
                            Reset
                    </Button>

                        <Button onClick={this.handleFindResults} disabled={!searching} variant="contained" color="primary" className={classes.button}>
                            Go
                    </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

const styles = theme => ({
    infomationText: {
        padding: '10px 2px',
        color: theme.palette.text.main
    },
    input: {
        width: '100%'
    },
    inputLabel: {
        fontSize: '1.3em',
        background: '#fff'
    },
    inputText: {
        fontSize: '14px'
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        fontSize: '0.8em'
    },
    goToHistoryButton: {
        float: 'right',
        top: '-6px',
        color: '#fff',
        fontSize: '20px',
        boxShadow: 'none'
    }
});

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(GoogleSearcher));