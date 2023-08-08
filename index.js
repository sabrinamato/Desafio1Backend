const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const deportistasRouter = require("./routes/index");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", deportistasRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
