const nodeEnv = process.env.NODE_ENV;
const isDevSite = window.location.hostname.split('.')[0] === 'dev';

const isLocal = !nodeEnv;
const isDevelopment = nodeEnv === 'development' || isDevSite;
const isProduction = nodeEnv === 'production' && !isDevSite;

const getBaseUrl = () => {
    if (isLocal) {
        return 'https://localhost:3000';
    }

    if (isDevelopment) {
        return 'https://dev.<domain>.com';
    }

    return 'https://<domain>.com';
};

const getApiUrl = () => {
    if (isLocal) {
        return 'http://localhost:8000';
    }

    if (isDevelopment) {
        return 'https://api.dev.<domain>.com';
    }

    return 'https://api.<domain>.com';
};

const Configs = {
    IS_LOCAL: isLocal,
    IS_DEVELOPMENT: isDevelopment,
    IS_PRODUCTION: isProduction,
    BASE_URL: getBaseUrl(),
    API_URL: getApiUrl(),
};

Object.freeze(Configs);

export default Configs;
