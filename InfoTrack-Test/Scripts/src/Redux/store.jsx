import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "@Redux/Reducers/index";

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
});
export default store;