const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browseUser);
router.get("/users/:id", userControllers.browseUser);
router.put("/users/:id", userControllers.editUser);
router.post("/users", userControllers.addUser);
/* 
const decisionControllers = require("./controllers/decisionControllers");

const commentControllers = require("./controllers/commentControllers"); */

module.exports = router;
