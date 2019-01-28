import React from 'react';
import PropTypes from 'prop-types';
import deep from 'deep-get-set';
import { Consumer } from './context';
import connectContext from './connectContext';

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

const mapContextToProps = context => ({
    onClickButton: context.onClickButton,
    count: deep(context, 'count'),
});

export default connectContext(Consumer, mapContextToProps)(Button);
