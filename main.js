const Sentry = require("@sentry/electron");
const { app, BrowserWindow } = require('electron')


Sentry.init({ dsn: "https://993da2fe84f34bfa85092195395b4036@o1407376.ingest.sentry.io/4504368190259200",
  debug:true,
  
});
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.whenReady().then(() => {
  
    console.log(c)

})
