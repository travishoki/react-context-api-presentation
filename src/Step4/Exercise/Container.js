import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Container = ({
    count,
    onClickButton,
}) => (
    <Button
        count={count}
        onClickButton={onClickButton}
    />
);

Container.propTypes = {
    count: PropTypes.number.isRequired,
    onClickButton: PropTypes.func.isRequired,
};

export default Container;
