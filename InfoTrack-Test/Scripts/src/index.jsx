import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

//Redux
import { Provider } from "react-redux";
import Store from "./Redux/store.jsx";

// Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "rgb(6, 150, 183)"
        },
        secondary: {
            main: "rgb(255, 165, 0)"
        },
        text: {
            main: "#aaa"
        }
    }
});

const containerElement = document.getElementById('homeContent');
ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
    , containerElement);