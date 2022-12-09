const pg = require('pg');
const express = require('express');
const app = express();
const json = express.json();
app.use(json);

app.listen(3000, () => process.stdout.write('Listening on port 3000!'));

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  if (!name || !course || !score ||
    score > 100 || score < 0) {
    res.status(400).json({
      error: 'The grade you tried to add is either missing a value or has an invalid score'
    });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  const gradeArray = [name, course, score];
  db.query(sql, gradeArray)
    .then(result => {
      const grade = result.rows[0];
      res.status(201);
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  if (!name || !course || !score || !Number.isInteger(gradeId) || gradeId <= 0 ||
    score > 100 || score < 0 || !Number.isInteger(score)) {
    res.status(400).json({
      error: 'The grade you tried to add is either missing a value or has an invalid score'
    });
    return;
  }
  const sql = `
  update "grades"
     set "name" = $1,
         "course" = $2,
         "score" = $3
   where "gradeId" = $4
   returning *
  `;
  const gradeArray = [name, course, score, gradeId];
  db.query(sql, gradeArray)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
  delete
    from "grades"
   where "gradeId" = $1
   returning *
  `;
  const gradeArray = [gradeId];
  db.query(sql, gradeArray)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
