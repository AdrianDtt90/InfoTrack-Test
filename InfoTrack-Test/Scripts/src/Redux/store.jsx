import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers.jsx";

//Library to trigger async actions
import thunk from 'redux-thunk';

//Middleware to display in the console the actions triggered by the user
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result;
}

//This create the store
//By passing the bunch of reducers and 2 middlewares
const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);

export default store;