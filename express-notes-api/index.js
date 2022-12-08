const fs = require('fs');
const express = require('express');
const data = require('./data.json');
const app = express();
const json = express.json();
app.use(json);

app.get('/api/notes', (req, res) => {
  const dataValues = [];
  for (const key in data.notes) {
    dataValues.push(data.notes[key]);
  }
  res.json(dataValues);
});

app.get('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if (!(idNumber > 0)) {
    res.status(400);
    const posIntErr = { error: 'id must be a positive integer' };
    res.send(posIntErr);
  } else if (!data.notes[idNumber]) {
    const notThereErr = { error: 'cannot find note with id ' };
    notThereErr.error += idNumber;
    res.status(404);
    res.send(notThereErr);
  } else {
    res.json(data.notes[idNumber]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400);
    const noBodyErr = { error: 'content is a required field' };
    res.send(noBodyErr);
  } else {
    res.status(201);
    req.body.Id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    const stringified = JSON.stringify(data, null, 2);
    const noWriteErr = { error: 'An unexpected error occurred.' };
    fs.writeFile('data.json', stringified, 'utf-8', err => {
      if (err) {
        res.status(500);
        console.error(err);
        res.json(noWriteErr);
      } else {
        res.status(200);
        res.json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if (!(idNumber > 0)) {
    res.status(400);
    const posIntErr = { error: 'id must be a positive integer' };
    res.send(posIntErr);
  } else if (!data.notes[idNumber]) {
    const notThereErr = { error: 'cannot find note with id ' };
    notThereErr.error += idNumber;
    res.status(404);
    res.send(notThereErr);
  } else {
    delete data[req.params.id];
    const stringified = JSON.stringify(data, null, 2);
    const noWriteErr = { error: 'An unexpected error occurred.' };
    fs.writeFile('data.json', stringified, 'utf-8', err => {
      if (err) {
        res.status(500);
        console.error(err);
        res.json(noWriteErr);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if ((!(idNumber > 0)) || (!req.body.content)) {
    res.status(400);
    const posIntErr = { error: 'id must be a positive integer' };
    res.send(posIntErr);
  } else if (!data.notes[idNumber]) {
    const notThereErr = { error: 'cannot find note with id ' };
    notThereErr.error += idNumber;
    res.status(404);
    res.send(notThereErr);
  } else {
    req.body.id = idNumber;
    data.notes[idNumber] = req.body;
    const stringified = JSON.stringify(data, null, 2);
    const noWriteErr = { error: 'An unexpected error occurred.' };
    fs.writeFile('data.json', stringified, 'utf-8', err => {
      if (err) {
        res.status(500);
        console.error(err);
        res.json(noWriteErr);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.listen(3000, () => process.stdout.write('Listening on port 3000!'));
