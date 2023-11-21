const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// POST /api/posts
router.post("/posts", postController.createPost);

// GET /api/posts
router.get("/posts", postController.getPosts);

// GET /api/posts/:postId
router.get("/posts/:postId", postController.getPostById);

// PUT /api/posts/:postId
router.put("/posts/:postId", postController.updatePost);

// DELETE /api/posts/:postId
router.delete("/posts/:postId", postController.deletePost);

module.exports = router;
