import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

// components
import Main from './components/Main';
import Navigation from './components/Navigation';
import Countries from './components/Countries';

// utils
import client from './utils/apolloClient';

const StyledWrapper = styled.div`
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
                                path="/countries"
                                component={Countries}
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
