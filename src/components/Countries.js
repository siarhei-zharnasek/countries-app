import React  from 'react';
import styled from 'styled-components';

const StyledCountries = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Country = ({ name }) => name;

const Countries = ({ countries = [] }) => (
    <StyledCountries>
        {countries.map(itemData => (
            <Country {...itemData} />
        ))}
    </StyledCountries>
);

export default Countries;
