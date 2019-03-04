const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    // create electron window
    win = new BrowserWindow({ width: 1200, height: 800 });

    // load main file
    win.loadFile('index.html');

    // dereference window object when closed
    win.on('closed', () => {
        win = null;
    });
}

// start app when ready
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
    // leave app active if on macOS
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// re-create window if clicking from macOS dock
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});