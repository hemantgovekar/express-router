const express = require('express');
const router = express.Router();

router.get("/comments", (req, res) => {
    res.json({ "msg": "you are in comment section" });
})

router.post("/comments", (req, res) => {
    res.json({ "msg": "you are in comment section" });
})

router.put("/comments", (req, res) => {
    res.json({ "msg": "you are in comment section" });
})

router.delete("/comments", (req, res) => {
    res.json({ "msg": "you are in comment section" });
})



module.exports = router 