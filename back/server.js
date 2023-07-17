require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.use(express.json());

app.use("/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on PORT : ", process.env.APP_PORT);
})