const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
require("./config/db");

const app = express();

const usersRouter = require("./routes/userRoutes");
const contactsRouter = require("./routes/contactRoutes");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// define routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/contacts", contactsRouter);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
