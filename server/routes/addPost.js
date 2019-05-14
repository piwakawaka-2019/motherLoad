const express = require("express");
const db = require("../db/posts");

const router = express.Router();

router.post('/add', (req, res)=>{
  console.log("route called")
  let post = req.body
    db.addPost(post)
    .then(()=>{
      // res.setStatus(200).json({ message: "Success" });
    })
    .catch(err => {
      console.error(err);
      // res.setStatus(500).json({ error: "It Broke" });
  });
})


module.exports = router
