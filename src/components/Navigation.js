import React  from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

// queries
import { countriesNamesQuery } from '../queries';

// components
import StyledLink from './Link';
import Loader from './Loader';
import Error from './Error';

// utils
import routes from '../utils/routes';

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    width: 250px;
    min-height: 100%;
    border-right: 1px solid #e2e2e2;
    padding-right: 20px;
`;

const Navigation = () => {
    const { loading, error, data: { countries = [] } = {} } = useQuery(countriesNamesQuery);

    if (error) {
        return <Error />;
    }

    return (
        <StyledNavigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to={routes.countries}>Countries list</StyledLink>
            {loading ? <Loader /> : null}
            {countries.map(({ name, code }) => (
                <StyledLink
                    to={`${routes.countries}/${code}`}
                    key={`${code}-${name}`}
                    nested="true"
                >
                    {name}
                </StyledLink>
            ))}
        </StyledNavigation>
    );
};

export default Navigation;
