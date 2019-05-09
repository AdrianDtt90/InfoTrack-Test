import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

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
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , containerElement);