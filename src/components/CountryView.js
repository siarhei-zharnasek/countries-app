import React  from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

// queries
import { getSingleCountryQuery } from '../queries';

// components
import Error from './Error';

const StyledTitle = styled.span`
    font-size: 36px;
    margin-top: 0;
`;
const StyledSubTitle = styled.span`
    margin-right: 10px;
    font-weight: 100;
`;

const CountryView = ({ match }) => {
    const { code } = match.params;
    const { loading, error, data: { country = {} } = {} } = useQuery(getSingleCountryQuery(code));

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    if (error) {
        return <Error />;
    }

    if (!country) {
        return (
            <div>There is no such country. Try again.</div>
        );
    }

    const { name, native, currency, phone } = country;
    const renderBlock = (subTitle, title) => (
        <div>
            <StyledSubTitle>{subTitle}</StyledSubTitle>
            <StyledTitle>
                {title || '-'}
            </StyledTitle>
        </div>
    );

    return (
        <div>
            {renderBlock('Country name (in English):', name)}
            {renderBlock('Country name:', native)}
            {renderBlock('Currency:', currency)}
            {renderBlock('Phone code:', phone)}
        </div>
    );
};

export default CountryView;
