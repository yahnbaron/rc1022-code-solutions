const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('howdy');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on port 3000!'));
