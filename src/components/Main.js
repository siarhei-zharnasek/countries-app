import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`;

const Main = () => (
    <div>
        <StyledTitle>Countries app</StyledTitle>
        <p>This is the main page. Navigate through the left panel</p>
    </div>
);

export default Main;
