// const pg = require('pg');
const express = require('express');
const app = express();
const json = express.json();
app.use(json);

// const db = new pg.Pool({
//  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
//  ssl: {
//    rejectUnauthorized: false
//  }
// });
