import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Loader from './components/loader';
import Paths from './constants/path';
import routes from './routes';

const StyledWrapper = styled.div`
    width: 100%;
    padding: 40px;
`;

const StyledDescription = styled.div`
    text-align: center;
    padding: 40px;
    color: #000;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
`;

const StyledContainer = styled.div`
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
    border-radius: 20px;
`;

const StyledLink = styled(Link)`
    color: blue;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
`;

const StyledUrl = styled.a`
    color: green;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
`;

function App() {
    const { t } = useTranslation();

    return (
        <StyledWrapper>
            <StyledDescription>{t('home.description')}</StyledDescription>
            <StyledUrl href="https://martikavagyan.com" target="_blank" aria-label="See My Website Here!">
                See My Website Here!
            </StyledUrl>

            <StyledLink to={Paths.TEST_PAGE}>Test Page</StyledLink>

            <StyledContainer>
                <Switch>
                    {routes.map(({ name, path, Component }, index) => (
                        <Route key={name + index} path={path} exact>
                            <Suspense fallback={<Loader />}>
                                <Component />
                            </Suspense>
                        </Route>
                    ))}
                </Switch>
            </StyledContainer>
        </StyledWrapper>
    );
}

export default App;
