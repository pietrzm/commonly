module.exports = () => ({
    tests: [ "src/**/*.spec.ts" ],
    files: [
        "package.json",
        "src/**/*.ts",
        "!src/**/*.spec.ts"
    ],

    env: { type: 'node', runner: 'node' },
    testFramework: 'jest',


    setup: wallaby => {
        const config = require('./jest.config')
        delete config.transform

        wallaby.testFramework
            .configure(config)
    }
})