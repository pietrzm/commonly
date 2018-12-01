module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "<rootDir>/__build__/jest-transformer"
    },
    testMatch: [
        "**/?(*.)spec.ts"
    ],

    moduleDirectories: [
        "src", "node_modules"
    ]
}