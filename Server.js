const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

  res.send(`

    <!DOCTYPE html>

    <html>

      <head>

        <title>Links Predictor AI</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <style>

          body {

            margin: 0;

            font-family: Arial, sans-serif;

            background: #050b18;

            color: white;

            text-align: center;

          }

          .box {

            padding: 80px 20px;

          }

          h1 {

            font-size: 42px;

          }

          p {

            color: #9aa7bd;

            font-size: 18px;

          }

        </style>

      </head>

      <body>

        <div class="box">

          <h1>Links Predictor AI</h1>

          <p>Your website is online.</p>

        </div>

      </body>

    </html>

  `);

});

app.listen(PORT, () => {

  console.log("Server running on port " + PORT);

});
