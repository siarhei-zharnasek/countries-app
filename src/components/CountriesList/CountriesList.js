import React  from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

// queries
import { countriesListQuery } from '../../queries';

// components
import Country from './Country';

const StyledCountriesList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const CountriesList = () => {
    const { loading, error, data: { countries = [] } = {} } = useQuery(countriesListQuery);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <StyledCountriesList>
            {countries.map(({ name, native, languages, continent = {}, code }) => (
                <Country
                    key={name}
                    name={name}
                    native={native}
                    languages={languages}
                    continentName={continent.name}
                    code={code}
                />
            ))}
        </StyledCountriesList>
    );
};

export default CountriesList;
