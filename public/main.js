const { app, BrowserWindow } = require('electron')
const backend = require('./backend')

require('@electron/remote/main').initialize()

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true
        }
    })

    win.loadFile('build/index.html')
}

app.on('ready', () => {
    () => backend;
    createWindow})

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})