const { app, BrowserWindow } = require("electron");

var initialize = function () {

    var win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("./index.html");
};

app.whenReady().then(initialize);

