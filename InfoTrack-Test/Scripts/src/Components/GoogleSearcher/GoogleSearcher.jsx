﻿import React from 'react';

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

// Custom Components
import GoogleSearcherResults from '../GoogleSearcherResults/GoogleSearcherResults.jsx';

class GoogleSearcher extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card>
                <CardContent>
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
                        value={''}
                        onChange={() => { }}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            classes: {
                                root: classes.inputLabel
                            }
                        }}
                        inputProps={{
                            maxLength: 50,
                        }}
                    />

                    <TextField
                        id="keywords"
                        label="Keywords"
                        className={classes.input}
                        placeholder="i.e. online title search"
                        value={''}
                        onChange={() => { }}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            classes: {
                                root: classes.inputLabel
                            }
                        }}
                        inputProps={{
                            maxLength: 50,
                        }}
                    />

                    <hr />

                    <GoogleSearcherResults />

                </CardContent>
                <CardActions className={classes.buttonsContainer}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Reset
                    </Button>

                    <Button variant="contained" color="primary" className={classes.button}>
                        Find Results
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

GoogleSearcher.propTypes = {

};

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
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        fontSize: '0.8em'
    }
});

export default withStyles(styles)(GoogleSearcher);