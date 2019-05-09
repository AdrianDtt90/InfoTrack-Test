import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './Components/Comp1/Comp1.jsx';
import Button from '@material-ui/core/Button';


class App extends React.Component {

    componentDidMount() {
        fetch('/Home/getmensaje?url=wikipedia.org&keywords=aulica')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                debugger;
                console.log(myJson);
            });
    }
    render() {
        return <div><Comp1/> 
            <Button variant="contained" color="primary">
                Hello World4
            </Button>
            beatchess</div>;
    }
}

const containerElement = document.getElementById('content');
ReactDOM.render(<App />, containerElement);