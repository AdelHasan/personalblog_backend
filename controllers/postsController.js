const express = require("express");
const Post = require("./../models/Post");
const router = express.Router();

// Get all posts
router.get("/", (req, res) => {
  Post.find().then((posts) =>
    res.json({
      status: 200,
      posts: posts,
    })
  );
});

// Add a post
router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  Post.create(data).then((post) =>
    res.json({
      status: 200,
      post: post,
    })
  );
});

// Get post by id
router.get("/:id", (req, res) => {
  Post.findById(req.params.id).then((post) => {
    res.json({
      status: 200,
      post: post,
    });
  });
});

// Delete post by id
router.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id).then((post) => {
    res.json({
      status: 200,
      post: post,
    });
  });
});

//   Update post by id
router.put("/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (post) => {
      res.json({
        status: 200,
        post: post,
      });
    }
  );
});

module.exports = router;
