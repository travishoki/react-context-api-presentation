/*
Instructions:
- Pass "title" to the Provider
---------------------------------------------------- */

import React, { Component, Fragment } from 'react';
import Container from './Container';
// import { Provider } from './context';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello World'
        };
    }

    render() {
        return (
            <Fragment>
                <p className="step-title">Step 2 - Exercise</p>
                <Container />
            </Fragment>
        );
    }
}

export default App;
