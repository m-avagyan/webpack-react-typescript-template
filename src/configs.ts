/* DEFINE YOUR APP MAIN CONFIGS HERE */
const Configs = {
    isLocalMode: process.env.NODE_ENV === 'local',
    isLocalHttpsMode: process.env.NODE_ENV === 'local:https',
    isDevelopmentMode: process.env.NODE_ENV === 'development',
    isProductionMode: process.env.NODE_ENV === 'production',
    baseUrl: 'https://localhost:3000',
    apiUrl: 'https://api.<domain>',
    defaultLocale: 'en',
    supportedLocales: ['en'],
};

Object.freeze(Configs);

export default Configs;
