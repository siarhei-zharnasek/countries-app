import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: ${props => props.nested ? "15px" : 0};
    font-size: ${props => props.nested ? "14px" : "inherit"};
`;

export default StyledLink;
