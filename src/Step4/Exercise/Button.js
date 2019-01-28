/*
Instructions:
- Render "count" in the button text via mapContextToProps
- Connect "onClickButton" to the "onClick" event via mapContextToProps
---------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
// import deep from 'deep-get-set';
// import { Consumer } from './context';
// import connectContext from './connectContext';

const Button = ({
    count,
    onClickButton,
}) => (
    <button
        onClick={onClickButton}
    >Click Me: {count}</button>
);

Button.propTypes = {
    count: PropTypes.number.isRequired,
    onClickButton: PropTypes.func.isRequired,
};

export default Button;
