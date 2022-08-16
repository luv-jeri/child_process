const express = require('express');
const { fork } = require('child_process');

const app = express();

app.get('/one', (req, res) => {
  const sum = task();
  res.send({ sum: sum });
});

app.get('/two', async (req, res) => {
  const sum = await taskPromise();
  res.send({ sum: sum });
}); 

app.get('/three', (req, res) => {
  const child = fork('./task.js');
  child.send('start');
  child.on('message', (sum) => {
    res.send({ sum: sum });
  });
});

app.listen(3000, () => console.log('server on port 3000...'));

function task() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

function taskPromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    resolve(sum);
  });
}


// loadtest -n 10 -c 10 http://localhost:3000/one