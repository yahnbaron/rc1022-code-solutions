const express = require('express');
const app = express();
let nextId = 1;
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
const json = express.json();
app.use(json);

app.get('/api/grades', (req, res) => {
  const arrayBeforeJSON = [];
  for (const key in grades) {
    arrayBeforeJSON.push(grades[key]);
  }
  res.json(arrayBeforeJSON);
});

app.listen(3000, () => process.stdout.write('Listening on port 3000!'));

app.post('/api/grades', (req, res) => {
  res.status(201);
  req.body.Id = nextId;
  grades[nextId] = req.body;
  res.json(req.body);
  nextId++;
});

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});
