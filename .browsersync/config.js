var server = require("browser-sync")

server.init({
    server: '../src',
    watch: true,
    open: true,
    notify: false,
    logLevel: 'debug',
    logConnections: true,
    logFileChanges: true,
    browser: ['firefox'],
    port: 8000,
    ui: {
      port: 8080
    }
})
