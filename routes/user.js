const express = require('express');
const router = express.Router();

router.get("/user", (req, res) => {
    res.send({ "msg": "Get response in express" });
});

router.post("/user", (req, res) => {
    res.send({ "msg": "Get response in express" });
});

router.put("/user", (req, res) => {
    res.send({ "msg": "Get response in express" });
});

router.delete("/user", (req, res) => {
    res.send({ "msg": "Get response in express" });
});


module.exports = router 