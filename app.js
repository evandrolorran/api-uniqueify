const express = require("express");
const app = express();
const cors = require("cors");
const validation = require("./utils/validation");
const errorHandler = require("./utils/errorHandler");

app.use(cors());

app.get("/unique-ify", (req, res) => {
  try {
    const inputText = req.query.text;

    if (!inputText) {
      return res.status(409).send(errorHandler.defineErrorByCode(409));
    }

    var outputText = validation.makeTextUnique(inputText.toLowerCase());

    if (!(outputText instanceof Error)) {
      res.status(200).send(outputText);
    } else {
      statusCode = parseInt(outputText.message);
      res.status(statusCode).send(errorHandler.defineErrorByCode(statusCode));
    }
  } catch (error) {
    return res.status(500).send(errorHandler.defineErrorByCode(500));
  }
});

// When a enviornment port variable is defined.
// e.g. - export PORT=2808
const PORT = process.env.PORT || 2808;
app.listen(PORT, () => {
  console.log("Server is up and listening on: " + PORT);
});
