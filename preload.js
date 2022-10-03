const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    title: "My Daily Notes App",
    createNote: (data) => ipcRenderer.invoke('create-file', data)
})
