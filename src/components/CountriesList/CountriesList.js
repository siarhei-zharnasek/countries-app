import React  from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

// queries
import { countriesListQuery } from '../../queries';

// components
import Country from './Country';
import Loader from '../Loader';

const StyledCountriesList = styled.div`
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
`;

const CountriesList = () => {
    const { loading, error, data: { countries = [] } = {} } = useQuery(countriesListQuery);

    if (loading) {
        return <Loader />;
    }

    return (
        <StyledCountriesList>
            {countries.map(({ name, native, languages, continent = {}, code }) => (
                <Country
                    key={name}
                    name={name}
                    native={native}
                    languages={languages}
                    continent={continent}
                    code={code}
                />
            ))}
        </StyledCountriesList>
    );
};

export default CountriesList;
