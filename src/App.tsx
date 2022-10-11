import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return <div>{t('home.description')}</div>;
}

export default App;
