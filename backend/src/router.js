const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// DECISIONS
const formDecisionControllers = require("./controllers/formDecisionControllers");

router.post("/decision", formDecisionControllers.decisionPost);
router.get("/decisions", formDecisionControllers.decisionGet);
router.get("/decisions/:id", formDecisionControllers.decisionGetByID);

// Date Timeline
const formDateDecisionControllers = require("./controllers/formDecisionControllers");

router.post("/date", formDateDecisionControllers.timelinePost);

// USERS
const { validateUser } = require("./services/validateUser");
const userControllers = require("./controllers/userControllers");

// USERS PUBLIQUES
router.post("/signup", userControllers.signUpUser);
router.post("/login", userControllers.login);

// USERS PRIVEES
const { auth } = require("./middleware/auth");

router.post("/register", auth, validateUser, userControllers.register);
router.get("/users", auth, userControllers.getUsers);
router.get("/users/:id", auth, userControllers.getUsersByID);
router.put("/users/:id", auth, userControllers.adminUpdateUser);
router.delete("/users/:id", userControllers.deleteUser);

// const decisionControllers = require("./controllers/FormDecisionControllers");

// const commentControllers = require("./controllers/commentControllers");

module.exports = router;
