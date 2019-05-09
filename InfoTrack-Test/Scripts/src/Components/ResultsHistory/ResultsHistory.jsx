import React from 'react';

// Material UI
// Core
import { withStyles } from "@material-ui/core/styles";
// Components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Custom Components
import GoogleSearcherResults from '../GoogleSearcherResults/GoogleSearcherResults.jsx';

class ResultsHistory extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card>
                <CardContent>
                    <Typography variant="h2" color="inherit">
                        Results History
                    </Typography>

                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary={<Typography variant="h5" color="inherit">10/10/2019 10:40pm</Typography>} className={classes.date} />
                            <GoogleSearcherResults />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={<Typography variant="h5" color="inherit">10/10/2019 10:40pm</Typography>} className={classes.date} />
                            <GoogleSearcherResults />
                        </ListItem>
                    </List>

                </CardContent>
            </Card>
        );
    }
}

ResultsHistory.propTypes = {

};

const styles = theme => ({
    date: {
        padding: '10px 2px',
        color: theme.palette.primary.main
    }
});

export default withStyles(styles)(ResultsHistory);