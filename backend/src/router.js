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
router.get("/mes-decisions/:id", formDecisionControllers.decisionGetByUserID);
router.get("/decisions-users", formDecisionControllers.decisionAndUserGet);
router.get("/decisions-en-cours", formDecisionControllers.decisionsEnCours);
router.get("/decisions-prises", formDecisionControllers.decisionsPrises);
router.delete("/decision/:id", formDecisionControllers.deleteDecisionByID);
router.put("/decision/:id", formDecisionControllers.putDecisionByID);

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

router.post("/register", validateUser, userControllers.register);
router.get("/users", auth, userControllers.getUsers);
router.get("/users/:id", auth, userControllers.getUsersByID);
router.put("/users/:id", userControllers.adminUpdateUser);
router.put("/user/:id", userControllers.userUpdateUser);
router.delete("/users/:id", userControllers.deleteUser);

module.exports = router;
