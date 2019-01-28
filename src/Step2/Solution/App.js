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
        return (
            <Provider
                value={{
                    title: this.state.title,
                }}
            >
                <p className="step-title">Step 2 - Solution</p>
                <Container />
            </Provider>
        );
    }
}

export default App;
