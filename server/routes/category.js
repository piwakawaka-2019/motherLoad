const express = require("express");
const db = require("../db/category");

const router = express.Router();

router.get("/get-category", (req, res) => {
  db.getCategory().then(data => {
    res.json(data);
  });
});
router.get("/category/:id/:location", (req, res) => {
  let id = req.params.id;
  let loc = req.params.location
  db.getPostsByCategory(id, loc)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "It Broke" });
    });
});

module.exports = router;
