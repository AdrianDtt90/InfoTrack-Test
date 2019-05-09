import {
    FIND_RESULTS,
    SHOW_MESSAGE,
    ADD_RESULT_HISTORY,
    SHOW_RESULT_HISTORY,
    HIDE_RESULT_HISTORY
} from "./constants.jsx";

export const findResults = results => ({
    type: FIND_RESULTS,
    results: results
});

export const showSuccessMessage = message => ({
    type: SHOW_MESSAGE,
    message: message
});


export const addResultHistory = search => ({
    type: ADD_RESULT_HISTORY,
    search: search
});

export const showResultHistory = () => ({
    type: SHOW_RESULT_HISTORY
});

export const hideResultHistory = () => ({
    type: HIDE_RESULT_HISTORY
});