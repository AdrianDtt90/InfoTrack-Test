import React from 'react';
import PropTypes from 'prop-types';

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

//Redux Actions
import {
    hideResultHistory
} from "../../Redux/actions.jsx";

//This subscribe the component to Redux store updates
const mapStateToProps = state => {
    return {
        listHistories: state.history.histories
    };
};

//This sets functions to dispatch actions to the store
const mapDispatchToProps = dispatch => ({
    goToSearch: () => {
        dispatch(hideResultHistory());
    },
});

//This component displays the search history list
class ResultsHistory extends React.Component {

    //This show the Google Searcher component and hide this component
    handleGoToSearch = () => {
        this.props.goToSearch();
    }

    render() {
        const { classes, listHistories } = this.props;

        return (
            <div {...this.props}>
                <Card>
                    <CardContent>
                        <Fab onClick={this.handleGoToSearch} size="small" color="primary" aria-label="Add" className={classes.goToSearchButton}>
                            <i class="material-icons">keyboard_arrow_left</i>
                        </Fab>

                        <Typography variant="h2" color="inherit">Results History</Typography>

                        <List component="nav">

                            {listHistories && listHistories instanceof Array && listHistories.length > 0 &&
                                <React.Fragment>
                                {listHistories.map((history, index) => {
                                    return <ListItem button>
                                        <ListItemText primary={<Typography variant="h5" color="inherit">{history.date}</Typography>} className={classes.date} />
                                        <GoogleSearcherResults url={history.url} keywords={history.keywords} result={history.result} />
                                    </ListItem>;
                                    })}
                                </React.Fragment>
                                ||
                                <ListItem button>
                                    <Typography variant="h5" color="inherit">No Records</Typography>
                                </ListItem>
                            }

                        </List>

                    </CardContent>
                </Card>
            </div>
        );
    }
}

ResultsHistory.propTypes = {
    listHistories: PropTypes.array
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