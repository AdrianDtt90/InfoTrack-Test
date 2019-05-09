import { combineReducers } from "redux";

import {
    FIND_RESULTS,
    SHOW_MESSAGE,
    HIDE_MESSAGE,
    SHOW_LOADING,
    HIDE_LOADING,
    ADD_RESULT_HISTORY,
    SHOW_RESULT_HISTORY,
    HIDE_RESULT_HISTORY
} from "./constants.jsx";


//Reducer for the google results
const result = (state = {}, action) => {
    switch (action.type) {
        case FIND_RESULTS: {
            return Object.assign({}, state, {
                result: action.results
            });
        }
        default:
            return state;
    }
};

//Reducer for the histories results
const history = (state = { histories: [], visibility: false }, action) => {
    switch (action.type) {
        case ADD_RESULT_HISTORY: {
            const record = { date: (new Date).toGMTString(), url: action.data.url, keywords: action.data.keywords, result: action.data.result };
            return Object.assign({}, state, {
                histories: [record, ...state.histories]
            })
        }
        case SHOW_RESULT_HISTORY: {
            return Object.assign({}, state, {
                visibility: true
            });
        }
        case HIDE_RESULT_HISTORY: {
            return Object.assign({}, state, {
                visibility: false
            });
        }
        default:
            return state;
    }
};

//Reducer for the messages triggered by the Snackbar Manager component
const message = (state = {}, action) => {
    switch (action.type) {
        
        case SHOW_MESSAGE: {
            return Object.assign({}, state, {
                text: action.message,
                typeMessage: action.typeMessage,
                show: true
            });
        }

        case HIDE_MESSAGE: {
            return Object.assign({}, state, {
                show: false
            });
        }

        default:
            return state;
    }
};

//Reducer for the loading component
const loading = (state = {}, action) => {
    switch (action.type) {

        case SHOW_LOADING: {
            return Object.assign({}, state, {
                show: true
            });
        }

        case HIDE_LOADING: {
            return Object.assign({}, state, {
                show: false
            });
        }

        default:
            return state;
    }
};

//We combine de reducer in one
const rootReducer = combineReducers({
    result,
    history,
    message,
    loading
});

export default rootReducer;