const { execFile } = require('child_process');

execFile('./test.exe', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
  if (stderr) {
    console.log(stderr);
    return;
  }
  console.log(stdout);
});

