const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
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
