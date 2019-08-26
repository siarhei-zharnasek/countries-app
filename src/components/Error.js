import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
    color: red;
`;

const Error = () => <StyledError>Something went wrong. Please reload the page</StyledError>;

export default Error;
