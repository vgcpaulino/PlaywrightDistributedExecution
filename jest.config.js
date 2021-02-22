module.exports = {
    preset: 'jest-playwright-preset',
    // reporters: ["jest-spec-reporter"],
    setupFiles: ['./hooks/jestSetup.js'],
    setupFilesAfterEnv: ['./hooks/jestHooks.js'],
    testTimeout: 9999999
}