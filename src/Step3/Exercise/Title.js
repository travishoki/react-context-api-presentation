import React from 'react';
// import PropTypes from 'prop-types';
// import deep from 'deep-get-set';
import { Consumer } from './context';
// import connectContext from './connectContext';


const Title = () => (
    <Consumer>
        {context => (
            <h1>{context.title}</h1>
        )}
    </Consumer>
);

// Title.propTypes = {
// title: PropTypes.bool,
// };

export default Title;
