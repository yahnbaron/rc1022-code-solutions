const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('howdy');
});

app.listen(3000, () => process.stdout('Listening on port 3000!'));
