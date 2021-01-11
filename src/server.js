require("@babel/register")();

const express = require("express");
const app = express();

const render = require("./render").default;

app.get("/", (reg, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
    <link type="text/css" rel="stylesheet" media="screen" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      <title>
        First "Hello world"
      </title>
    </head>

    <body>
      <div id="root">${render()}</div>
    </body>
  </html>
  `);
});

app.listen(3000, () => console.log('Server is ready on 3000'));