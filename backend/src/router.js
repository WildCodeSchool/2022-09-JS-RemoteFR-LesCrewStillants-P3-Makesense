const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const { validateUser } = require("./services/validateUser");
const userControllers = require("./controllers/userControllers");

router.post("/register", validateUser, userControllers.register);
router.post("/login", userControllers.login);
/* 
const decisionControllers = require("./controllers/decisionControllers");

const commentControllers = require("./controllers/commentControllers"); */

module.exports = router;
