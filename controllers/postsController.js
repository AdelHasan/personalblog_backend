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

module.exports = router;