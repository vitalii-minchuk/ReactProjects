const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./src/auth");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(authRouter);
app.use(cors());

const port = 3001;
app.listen(port, () => console.log(`server is listening port: ${port}`));
