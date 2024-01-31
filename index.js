const express = require('express');
const app = express();

const userRoute = require('./routes/user');
const commentRoute = require('./routes/comment');

app.use("/", userRoute);
app.use("/", commentRoute);


app.listen(3001, () => {
    console.log("Server running on port 3001");
})