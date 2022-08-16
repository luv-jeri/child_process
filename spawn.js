const { spawn } = require('child_process');

const child = spawn('node', ['--help']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code} and signal ${signal}`);
});

child.on('error', (err) => {
  console.log(`child process error: ${err}`);
});

// const ls = spawn('node', ['-v']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('exit', (code, signal) => {
//   console.log(`child process exited with code ${code}`);
//   console.log(`child process exited with signal ${signal}`);
// });

// ls.on('error', (err) => {
//   console.log(err);
// });
