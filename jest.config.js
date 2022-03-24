module.exports = {
    preset: 'vite-jest',

    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    testEnvironment: 'node',
};
