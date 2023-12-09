// Create web server
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Get all comments
router.get("/", commentController.getAllComments);

// Get comments by post id
router.get("/post/:id", commentController.getCommentsByPostId);

// Get comments by user id
router.get("/user/:id", commentController.getCommentsByUserId);

// Create comment
router.post("/", commentController.createComment);

// Update comment
router.put("/:id", commentController.updateComment);

// Delete comment
router.delete("/:id", commentController.deleteComment);

module.exports = router;