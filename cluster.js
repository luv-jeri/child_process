const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  for (let i = 0; i < 1e8; i++) {}
  res.send(`hi there , ${process.pid}`);
  cluster.worker.kill();
});

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  } 
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(8000, () => console.log(`${process.pid} listening on port 8000...`));
}
