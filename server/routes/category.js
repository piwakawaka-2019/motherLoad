const express = require("express");
const db = require("../db/category");

const router = express.Router();


router.get("/category/:id" , (req, res) => {
    let id =(req.params.id)
    console.log(id)
    db.getPostsByCategory(id)
    .then(response =>{
        console.log(response)
    })
    .catch(err => {
        console.error(err);
        // res.setStatus(500).json({ error: "It Broke"});
    });

});


module.exports = router