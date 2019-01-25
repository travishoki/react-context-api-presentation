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
                <p className="step-title">Step 1 - Solution</p>
                <Container
                    title={this.state.title}
                />
            </Fragment>
        );
    }
}

export default App;
