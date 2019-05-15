const express = require("express");
const db = require("../db/posts");

const router = express.Router();

router.get("/all", (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      console.error(err);
      res.setStatus(500).json({ error: "It Broke" });
    });
});

router.get("/articles" , (req, res) => {
    db.getArticles()
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
      res.setStatus(500).json({ error: "It Broke" });
    });
});

router.get("/tutorials", (req, res) => {
  db.getTutorials()
    .then(tips => {
      res.json(tips);
    })
    .catch(err => {
      console.error(err);
      res.setStatus(500).json({ error: "It Broke" });
    });
});
router.get("/byuser/:id", (req, res) => {
  let id = req.params.id;
  db.getPostsByUser(id)
    .then(userAndPosts => {
      let someData = [];
      userAndPosts.map(data => {
        someData.push({
          type: data.type,
          title: data.title,
          source_url: data.source_url,
          id: data.posts_id,
          description: data.description,
          user_name: data.user_name
        });
      });
      res.json(someData);
    })
    .catch(err => {
      console.error(err);
      res.setStatus(500).json({ error: "It Broke" });
    });
});

module.exports = router;
