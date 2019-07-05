const electron = require('electron')

const {app, BrowserWindow, Tray} = electron
let win
let tray

app.on('ready', ()=>{
    if(process.platform=='darwin'){
        app.dock.hide()
    }
    win = new BrowserWindow({
        height:500,
        width: 400,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        resizable: false,
        skipTaskbar: true
    })

    win.loadFile('index.html')
    tray = new Tray('images/iconTemplate.png')


    tray.on('click', ()=>{
        if(win.isVisible()){
            win.hide()
        }else{
            win.show()
        }
    })

    win.on('blur', ()=>{
        win.hide()
    })
})