import React  from 'react';
import styled from 'styled-components';

// components
import Link from '../Link';

// utils
import routes from '../../utils/routes';

const StyledCountry = styled(Link)`
    display: flex;
`;
const StyledName = styled.span`
    margin-right: 10px;
`;
const StyledNativeName = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`;
const StyledLanguage = styled.span`
    margin-left: 10px;
`;
const StyledContinentName = styled.span`
    margin-left: 20px;
`;

const Country = ({ name, native, languages = [], continentName, code }) => (
    <StyledCountry to={`${routes.countries}/${code}`}>
        <StyledName>{name}</StyledName>
        <span>/</span>
        <StyledNativeName>{native}</StyledNativeName>
        <span>/</span>
        {languages.map(({ name, native }) => (
            <StyledLanguage key={name}>
                {`${name} - ${native}`}
            </StyledLanguage>
        ))}
        <StyledContinentName>{continentName}</StyledContinentName>
    </StyledCountry>
);

export default Country;
