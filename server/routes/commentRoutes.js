const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// POST /api/comments
router.post("/comments", commentController.createComment);

// GET /api/comments
router.get("/comments", commentController.getComments);

// GET /api/comments/:commentId
router.get("/comments/:commentId", commentController.getCommentById);

// PUT /api/comments/:commentId
router.put("/comment/:commentId", commentController.updateComment);

// DELETE /api/comments/:commentId
router.delete("/comments/:commentId", commentController.deleteComment);

module.exports = router;
