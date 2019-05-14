const express = require("express");
const db = require("../db/posts");

const router = express.Router();

router.post('/add', (req, res)=>{
  let post = req.body
    db.addPostWithCategory(post)
    .then(()=>{
      // res.setStatus(200).json({ message: "Success" });
    })
    .catch(err => {
      console.error(err);
      // res.setStatus(500).json({ error: "It Broke" });
  });
})

router.post('/savepoststouser', (req, res)=>{
  let post = req.body
  db.savePostToUser(post)
  .then(()=>{
    // res.setStatus(200).json({ message: "Success" });
  })
  .catch(err => {
    console.error(err);
    // res.setStatus(500).json({ error: "It Broke" });
  });
})
router.post('/deletepostfromuser', (req, res)=>{
  let post = req.body
  db.savePostToUser(post)
  .then(()=>{
    // res.setStatus(200).json({ message: "Success" });
  })
  .catch(err => {
    console.error(err);
    // res.setStatus(500).json({ error: "It Broke" });
  });
})

module.exports = router
