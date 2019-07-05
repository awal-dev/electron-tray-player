const electron = require('electron')

const {app, BrowserWindow, Tray} = electron
let win

app.on('ready', ()=>{
    win = new BrowserWindow({
        height:500,
        width: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    const tray = new Tray('images/iconTemplate.png')


    tray.on('click', ()=>{
        if(win.isVisible()){
            win.hide()
        }else{
            win.show()
        }
    })
})