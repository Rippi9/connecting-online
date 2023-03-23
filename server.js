const express = require('express');
const path = require('path');
const hbs = require('handlebars');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname,'public')));



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
