//React
import React from 'react';
import ReactDOM from 'react-dom';

//Custom Component
import App from './Components/App.jsx';

//Redux
import { Provider } from "react-redux";
import Store from "./Redux/store.jsx";

// Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//This set the theme of the components
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "rgb(6, 150, 183)"
        },
        secondary: {
            main: "rgb(255, 165, 0)"
        },
        ok: {
            main: '#43a047'
        },
        error: {
            main: '#d32f2f'
        },
        warning: {
            main: '#ffa000'
        },
        info: {
            main: '#1976d2'
        },
        text: {
            main: "#aaa"
        }
    }
});

//<Provider store={Store}> - To make the "store" available to all container components in the application
//<MuiThemeProvider theme={theme}> - To make the "theme" available to all container components in the application
//<App> - So with ReactDOM.render we attach the root component to the HomePage
const containerElement = document.getElementById('homeContent');
ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
    , containerElement);