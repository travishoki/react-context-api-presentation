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
                <Container />
            </Provider>
        );
    }
}

export default App;
