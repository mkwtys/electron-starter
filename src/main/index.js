
import app from 'app';
import MainWindow from './MainWindow';

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  new MainWindow();
});
