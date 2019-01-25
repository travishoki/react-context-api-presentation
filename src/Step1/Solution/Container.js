import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

const Container = ({
    title
}) => (
    <Title title={title} />
);

Container.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Container;
