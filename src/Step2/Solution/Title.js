import React from 'react';
import { Consumer } from './context';

const Title = () => (
    <Consumer>
        {context => (
            <h1>{context.title}</h1>
        )}
    </Consumer>
);

export default Title;
