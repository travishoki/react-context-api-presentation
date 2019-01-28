import React, { Component, Fragment } from 'react';
import Container from './Container';

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
        return (
            <Fragment>
                <p className="step-title">Step 4 - Exercise</p>
                <Container
                    count={this.state.count}
                    onClickButton={this.onClickButton}
                />
            </Fragment>
        );
    }
}

export default App;
