module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: './reports',
            outputName: "test-report.xml",
            includeConsoleOutput: true,
            suiteName: 'Jest Tests',
            usePathForSuiteName: 'true',
        }]
    ],
    testEnvironment: "jsdom",
};
