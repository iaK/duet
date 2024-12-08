import { app, BrowserWindow } from "electron";
import serve from "electron-serve";
import path from "path";

const appServe = app.isPackaged ? serve({
  directory: path.join(import.meta.dirname, "../out")
}) : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(import.meta.dirname, "preload.mjs")
    }
  });

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://start");
    });
  } else {
    win.loadURL("http://localhost:3000/start");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});
