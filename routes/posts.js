var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// Helper function to load the JSON data
const loadPosts = (callback) => {
  const filePath = path.join(__dirname, '../post-lists.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(data));
    }
  });
};

// GET /posts - Returns all posts
router.get('/', function(req, res, next) {
  loadPosts((err, posts) => {
    if (err) {
      return res.status(500).send("Error reading posts");
    }
    res.json(posts);
  });
});

// GET /posts/:id - Returns a specific post by _id
router.get('/:id', function(req, res, next) {
  const postId = req.params.id;
  loadPosts((err, posts) => {
    if (err) {
      return res.status(500).send("Error reading posts");
    }
    const post = posts.find(p => p._id === postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.json(post);
  });
});

module.exports = router;
