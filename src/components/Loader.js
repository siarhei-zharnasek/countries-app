import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div`
    left: 100%;
    font-size: 5px;
    text-indent: -9999em;
    border-top: 3px solid rgba(0, 0, 0, 0.2);
    border-right: 3px solid rgba(0, 0, 0, 0.2);
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    border-left: 3px solid #000000;
    transform: translateZ(0);
    animation: ${rotate} 1.1s infinite linear;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-left: 10px;

    &:after {
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin-left: 10px;
    }
`;

export default StyledLoader;
