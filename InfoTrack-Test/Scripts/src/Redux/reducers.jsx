import { combineReducers } from "redux";

import {
    FIND_RESULTS,
    SHOW_MESSAGE,
    ADD_RESULT_HISTORY,
    SHOW_RESULT_HISTORY,
    HIDE_RESULT_HISTORY
} from "./constants.jsx";

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

const history = (state = { visibility: false }, action) => {
    switch (action.type) {
        case ADD_RESULT_HISTORY: {
            return Object.assign({}, state, {
                history: [...state.history, action.search]
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

const message = (state = {}, action) => {
    switch (action.type) {
        case SHOW_MESSAGE: {
            return Object.assign({}, state, {
                message: action.message
            });
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    result,
    history,
    message
});

export default rootReducer;