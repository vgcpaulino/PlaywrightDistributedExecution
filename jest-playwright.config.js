// https://github.com/playwright-community/jest-playwright/#configuration

module.exports = {
    browsers: ["chromium", "firefox", "webkit"],
    // browsers: ["firefox"],
    exitOnPageError: false,
    launchOptions: {
        headless: true,
        viewport: {
            width: 3840, 
            height: 2160
        }
    },
    skipInitialization: true
}