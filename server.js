const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = app;

const PORT = process.env.PORT || 4001;

// Handling CORS using the CORS middleware package
app.use(cors());

// Parsing body requests using body-parser middleware package
app.use(bodyParser.json());

if (!module.present) {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
