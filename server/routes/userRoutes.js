const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// POST /api/users
router.post("/users", userController.createUser);

// GET /api/users
router.get("/users", userController.getUsers);

// GET /api/users/:userId
router.get("/users/:userId", userController.getUserById);

// PUT /api/users/:userId
router.put("/users/:userId", userController.updateUser);

// DELETE /api/users/:userId
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
