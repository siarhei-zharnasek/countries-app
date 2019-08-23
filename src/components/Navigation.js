import React  from 'react';
import styled from 'styled-components';

import StyledLink from './Link';

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    min-width: 100px;
`;

const Navigation = () => (
    <StyledNavigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/countries">Countries list</StyledLink>
    </StyledNavigation>
);

export default Navigation;
