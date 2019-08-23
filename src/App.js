import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Main from './components/Main';
import Navigation from './components/Navigation';
import Countries from './components/Countries';

const StyledWrapper = styled.div`
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

function App() {
    return (
        <StyledWrapper>
            <Router>
                <Fragment>
                    <Navigation />
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
                </Fragment>
            </Router>
        </StyledWrapper>
    );
}

export default App;
