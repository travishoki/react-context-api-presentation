import React from 'react';
import PropTypes from 'prop-types';
import deep from 'deep-get-set';
import { Consumer } from './context';
import connectContext from './connectContext';

const Title = ({
    title
}) => (
    <h1>{title}</h1>
);

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

const mapContextToProps = context => ({
    title: deep(context, 'title'),
});

export default connectContext(Consumer, mapContextToProps)(Title);
