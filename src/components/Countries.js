import React  from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

// queries
import { countriesQuery } from '../queries';

// components
import Country from './Country';

const StyledCountries = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Countries = () => {
    const { loading, error, data: { countries = [] } = {} } = useQuery(countriesQuery);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <StyledCountries>
            {countries.map(({ name, native, languages, continent = {} }) => (
                <Country
                    key={name}
                    name={name}
                    native={native}
                    languages={languages}
                    continentName={continent.name}
                />
            ))}
        </StyledCountries>
    );
};

export default Countries;
