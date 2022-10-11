import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Loader from './components/loader/Loader';
import './i18next';

const App = lazy(() => import(/* webpackChunkName: "app-context" */ './App'));

ReactDOM.render(
    <Router>
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
    </Router>,
    document.getElementById('root')
);
