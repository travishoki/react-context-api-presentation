/*
Instructions:
- Pass "title" to the <Container /> component via props
---------------------------------------------------- */

import React, { Component, Fragment } from 'react';
import Container from './Container';

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
                <p className="step-title">Step 1 - Exercise</p>
                <Container />
            </Fragment>
        );
    }
}

export default App;
