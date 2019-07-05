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
    win.hide()
    win.loadFile('index.html')
    tray = new Tray('images/iconTemplate.png')


    tray.on('click', (event, bounds)=>{
        let {x, y} = bounds
        let { width, height} = win.getBounds()
        if(win.isVisible()){
            win.hide()
        }else{
            if(process.platform!='darwin'){
                y = y - height
            }
            win.setBounds({
                x: x - width/2,
                y,
                width,
                height
            })
            win.show()
        }
    })

    win.on('blur', ()=>{
        win.hide()
    })
})