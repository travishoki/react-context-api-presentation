import React, { Component } from 'react';
import TitleHolder from './TitleHolder';
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
                <TitleHolder />
            </Provider>
        );
    }
}

export default App;
