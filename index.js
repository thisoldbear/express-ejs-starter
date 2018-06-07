require('dotenv').config();

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', {
    data: {
      title: 'Hello world',
    },
  });
});

app.listen(process.env.PORT || 3000);
