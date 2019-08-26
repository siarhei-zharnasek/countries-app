import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

// components
import Main from './components/Main';
import Navigation from './components/Navigation';
import CountriesList from './components/CountriesList/CountriesList';
import CountryView from './components/CountryView';

// utils
import client from './utils/apolloClient';
import routes from './utils/routes';

const StyledWrapper = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80vw;
    margin-top: 50px;
`;

function App() {
    return (
        <ApolloProvider client={client}>
            <StyledWrapper>
                <Router>
                    <Fragment>
                        <Navigation />
                        <Switch>
                            <Route
                                path="/"
                                component={Main}
                                exact
                            />
                            <Route
                                path={routes.countries}
                                component={CountriesList}
                                exact
                            />
                            <Route
                                path={routes.country}
                                component={CountryView}
                                exact
                            />
                        </Switch>
                    </Fragment>
                </Router>
            </StyledWrapper>
        </ApolloProvider>
    );
}

export default App;
