const express = require("express");
const db = require("../db/posts");

const router = express.Router();

router.get("/posts" , (req, res) => {
    db.getPosts()
    .then(posts =>{
        res.json(posts);
    })
    .catch(err => {
        console.error(err);
        res.setStatus(500).json({ error: "It Broke"});
    });

});

router.get("/tips" , (req, res) => {
    db.getTips()
    .then(tips =>{
        res.json(tips);
    })
    .catch(err => {
        console.error(err);
        res.setStatus(500).json({ error: "It Broke"});
    });

});