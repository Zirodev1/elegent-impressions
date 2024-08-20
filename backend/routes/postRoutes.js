const express = require("express");
const multer = require("multer");
const Post = require("../models/postModel");
const { createPost, getPostById } = require("../controllers/postController");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Create poste router
router.post(
  "/create",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "additionalImages", maxCount: 10 },
  ]),
  createPost
);

// Recent posts route
router.get("/recent", async (req, res) => {
  try {
    const recentPosts = await Post.find({}).sort({ date: -1 }).limit(3);
    res.json(recentPosts);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    res.status(500).send("Error fetching recent posts");
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Error fetching posts");
  }
});

// Get a post by ID 
router.get("/:id", getPostById);

module.exports = router;
