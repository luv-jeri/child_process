const { exec } = require('child_process');

exec('notepad', (err, stdout, stderr) => {
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
