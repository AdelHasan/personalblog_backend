const express = require("express");
const Post = require('./../models/Post')
const router = express.Router();

router.get("/", (req, res) => {
    Post.find()
        .then((posts => res.json({
            status: 200,
            posts: posts
        })))
})

router.post("/", (req, res) => {
    const data = req.body
    console.log(data) 
    Post.create(data)
        .then((post) => res.json({
            status: 200,
            post: post
        }))
})

router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            res.json({
                status: 200,
                post: post,
            });
        });
  });
  
  router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then((post) => {
            res.json({
                status: 200,
                post: post,
            });
        });
  });
  
  router.put("/:id", (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((post) => {
            res.json({
                status: 200,
                post: post,
            });
        });
  });

module.exports = router;