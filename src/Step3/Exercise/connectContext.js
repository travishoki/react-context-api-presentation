import React from 'react';

export const connectContext = (
    ContextConsumer,
    mapContextToProps
) => Child => props => (
    <ContextConsumer>
        {data => <Child {...mapContextToProps(data)} {...props} />}
    </ContextConsumer>
);

export default connectContext;
