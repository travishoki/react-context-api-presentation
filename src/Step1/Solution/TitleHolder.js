import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

const TitleHolder = ({
    title
}) => (
    <Title title={title} />
);

TitleHolder.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TitleHolder;
