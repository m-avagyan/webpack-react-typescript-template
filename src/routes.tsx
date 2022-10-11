import { lazy, LazyExoticComponent, ReactNode } from 'react';

import Paths from './constants/path';

const Home = lazy(() => import(/* webpackChunkName: "pages/home" */ './pages/Home'));
const TestPage = lazy(() => import(/* webpackChunkName: "pages/test-page" */ './pages/TestPage'));

type TRoute = {
    name: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element>;
    Fallback: ReactNode | null;
};

const routes = [
    {
        name: 'home',
        path: Paths.HOME,
        Component: Home,
        Fallback: null,
    },
    {
        name: 'test-page',
        path: Paths.TEST_PAGE,
        Component: TestPage,
        Fallback: null,
    },
] as TRoute[];

export default routes;
