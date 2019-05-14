const express = require("express");
const db = require("../db/category");

const router = express.Router();

router.get("/get-category", (req, res) => {
  db.getCategory().then(data => {
    res.json(data);
  });
});
router.get("/category/:id", (req, res) => {
  let id = req.params.id;
  db.getPostsByCategory(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err);
      res.setStatus(500).json({ error: "It Broke" });
    });
});

module.exports = router;
