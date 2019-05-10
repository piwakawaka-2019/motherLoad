const express = require("express");
const db = require("../db/category");

const router = express.Router();

router.get("/all" , (req, res) => {
    db.getPostsByCategory()
    .then(posts =>{
        res.json(posts);
    })
    .catch(err => {
        console.error(err);
        res.setStatus(500).json({ error: "It Broke"});
    });

});


module.exports = router