import React, { Component } from 'react';
import Container from './Container';
import { Provider } from './context';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        let { count } = this.state;

        count += 1;
        this.setState({ count });
    }

    render() {
        const context = {
            count: this.state.count,
            onClickButton: this.onClickButton,
        };

        return (
            <Provider
                value={context}
            >
                <p className="step-title">Step 4 - Exercise</p>
                <Container />
            </Provider>
        );
    }
}

export default App;
