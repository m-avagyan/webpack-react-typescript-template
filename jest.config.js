module.exports = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
        '^.+\\.(ts|tsx)$': '@swc/jest',
        '^.+\\.(js|jsx)$': '@swc/jest',
    },
};
