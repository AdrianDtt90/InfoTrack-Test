import React from 'react';

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class GoogleSearcherResults extends React.Component {
    render() {
        const { classes, url, keywords, result } = this.props;

        const times = result && result != '0' ? result.split(", ").length : 0;

        return (
            <React.Fragment>
                <Grid container className={classes.root} justify="center">
                    <Grid item xs={6} ms={6} className={classes.resultBox}>
                        <Typography variant="h3" color="inherit">Search</Typography>
                        <Typography variant="h5" color="inherit"><u>URL</u>: {url || ''}</Typography>
                        <Typography variant="h5" color="inherit"><u>Keywords</u>: {keywords || ''}</Typography>
                    </Grid>

                    <Grid item xs={6} ms={6} className={classes.resultBox}>
                        <Typography variant="h3" color="inherit">Result</Typography>
                        <Typography variant="h5" color="inherit"><u>Times</u>: {times}</Typography>
                        <Typography variant="h5" color="inherit"><u>Positions</u>: {result}</Typography>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

GoogleSearcherResults.propTypes = {

};

const styles = theme => ({
    resultBox: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
});

export default withStyles(styles)(GoogleSearcherResults);