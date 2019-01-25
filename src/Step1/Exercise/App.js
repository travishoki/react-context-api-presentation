import React, { Component } from 'react';
import TitleHolder from './TitleHolder';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello World'
        };
    }

    render() {
        return (
            <TitleHolder
                title={this.state.title}
            />
        );
    }
}

export default App;
