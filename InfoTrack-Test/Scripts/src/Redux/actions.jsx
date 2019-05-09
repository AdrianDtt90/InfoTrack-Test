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

//This creates the actions to modify the store

export const findResults = results => ({
    type: FIND_RESULTS,
    results: results
});

export const showMessage = (message, typeMessage) => ({
    type: SHOW_MESSAGE,
    message: message,
    typeMessage: typeMessage
});

export const hideMessage = () => ({
    type: HIDE_MESSAGE
});

export const showLoading = () => ({
    type: SHOW_LOADING
});

export const hideLoading = () => ({
    type: HIDE_LOADING
});

export const showMessageError = message => ({
    type: SHOW_MESSAGE_ERROR,
    message: message
});

export const addResultHistory = data => ({
    type: ADD_RESULT_HISTORY,
    data: data
});

export const showResultHistory = () => ({
    type: SHOW_RESULT_HISTORY
});

export const hideResultHistory = () => ({
    type: HIDE_RESULT_HISTORY
});