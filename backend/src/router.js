const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");
const { hashPassword } = require("./controllers/pwControllers");

router.get("/users", userControllers.browseUser);
router.get("/users/:id", userControllers.readUser);
router.put("/users/:id", userControllers.editUser);
router.post("/users", hashPassword, userControllers.addUser);
router.delete("/users/:id", userControllers.destroyUser);

// on veut récupérer nos prise de décisions
// router.post("/form/add", formDecisionControllers.addform);

/* 
const decisionControllers = require("./controllers/decisionControllers");

const commentControllers = require("./controllers/commentControllers"); */

module.exports = router;
