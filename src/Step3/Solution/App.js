import React, { Component } from 'react';
import Container from './Container';
import { Provider } from './context';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello World'
        };
    }

    render() {
        const context = {
            title: this.state.title,
        };

        return (
            <Provider
                value={context}
            >
                <p className="step-title">Step 3 - Solution</p>
                <Container />
            </Provider>
        );
    }
}

export default App;
