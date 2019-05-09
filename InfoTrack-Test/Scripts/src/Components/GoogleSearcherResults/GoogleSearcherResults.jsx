import React from 'react';

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class GoogleSearcherResults extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container className={classes.root} justify="center">
                    <Grid item xs={6} ms={6} className={classes.resultBox}>
                        <Typography variant="h3" color="inherit">Search</Typography>
                        <Typography variant="h5" color="inherit"><u>URL</u>: www.google.com</Typography>
                        <Typography variant="h5" color="inherit"><u>Keywords</u>: Hi I'm Adrian</Typography>
                    </Grid>

                    <Grid item xs={6} ms={6} className={classes.resultBox}>
                        <Typography variant="h3" color="inherit">Result</Typography>
                        <Typography variant="h5" color="inherit"><u>Times</u>:5</Typography>
                        <Typography variant="h5" color="inherit"><u>Positions</u>: 1,4,6,45</Typography>
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