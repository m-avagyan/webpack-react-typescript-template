import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Paths from './constants/path';
import routes from './routes';

function App() {
    const { t } = useTranslation();

    return (
        <div>
            {t('home.description')}

            <Link to={Paths.TEST_PAGE}>Test Page</Link>

            <Switch>
                {routes.map(({ name, path, Component }, index) => (
                    <Route key={name + index} path={path} exact>
                        <Suspense fallback={null}>
                            <Component />
                        </Suspense>
                    </Route>
                ))}
            </Switch>
        </div>
    );
}

export default App;
