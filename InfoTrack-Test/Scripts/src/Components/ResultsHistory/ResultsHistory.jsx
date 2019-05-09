import React from 'react';

//Redux
import { connect } from "react-redux";

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
import Fab from '@material-ui/core/Fab';

// Custom Components
import GoogleSearcherResults from '../GoogleSearcherResults/GoogleSearcherResults.jsx';

import {
    hideResultHistory
} from "../../Redux/actions.jsx";

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => ({
    goToSearch: () => {
        dispatch(hideResultHistory());
    },
});

class ResultsHistory extends React.Component {

    handleGoToSearch = () => {
        this.props.goToSearch();
    }

    render() {
        const { classes } = this.props;

        return (
            <div {...this.props}>
                <Card>
                    <CardContent>
                        <Fab onClick={this.handleGoToSearch} size="small" color="primary" aria-label="Add" className={classes.goToSearchButton}>
                            <i class="material-icons">keyboard_arrow_left</i>
                        </Fab>

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
            </div>
        );
    }
}

ResultsHistory.propTypes = {

};

const styles = theme => ({
    date: {
        padding: '10px 2px',
        color: theme.palette.primary.main
    },
    goToSearchButton: {
        float: 'right',
        top: '-6px',
        color: '#fff',
        fontSize: '20px',
        boxShadow: 'none'
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ResultsHistory));