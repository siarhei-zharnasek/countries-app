import React  from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

// queries
import { getSingleCountryQuery } from '../queries';

const StyledCountryView = styled.div`
    display: flex;
`;
const StyledCountryViewTitle = styled.h1`
    font-size: 36px;
    margin-top: 0;
`;

const CountryView = ({ match }) => {
    const { code } = match.params;
    const { loading, error, data: { country = {} } = {} } = useQuery(getSingleCountryQuery(code));

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    if (!country) {
        return null;
    }

    const { name, native, currency, phone } = country;

    return (
        <div>
            <StyledCountryViewTitle>
                {`${name} - ${native}`}
            </StyledCountryViewTitle>
            <StyledCountryView>
                {`${currency} (${phone})`}
            </StyledCountryView>
        </div>
    );
};

export default CountryView;
