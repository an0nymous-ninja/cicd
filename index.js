const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  https
    .get("https://dummyjson.com/quotes/random", (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        const quoteData = JSON.parse(data);

        res.send(`
        <h1>Motivational Quote !!!</h1>
        <p>"${quoteData.quote}"</p>
        <p><i>- ${quoteData.author}</i></p>
      `);
      });
    })
    .on("error", (error) => {
      console.error("Error fetching quote:", error);
      res.status(500).send("Error fetching quote. Please try again later.");
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});