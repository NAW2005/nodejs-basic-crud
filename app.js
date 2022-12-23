const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./user");
const postRouter = require("./post");

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(3000, console.log("server is running at port 3000"));
