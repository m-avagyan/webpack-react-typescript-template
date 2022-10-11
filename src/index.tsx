import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loader from './components/loader/Loader';

import './i18next';

const App = lazy(() => import(/* webpackChunkName: "app" */ './App'));

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>,
    document.getElementById('root')
);
