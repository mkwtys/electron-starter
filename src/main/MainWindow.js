/// <reference path="./typings/bundle.d.ts" />

/* @flow */

import BrowserWindow from 'browser-window';

export default class MainWindow {
  window: BrowserWindow;
  constructor() {
    this.window = new BrowserWindow({
      width: 1200,
      height: 800
    });
    this.window.loadURL(`file://${__dirname}/../renderer/index.html`);
    this.window.on('closed', () => {
      this.window.destroy();
    });
  }
}
