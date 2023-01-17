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
// PUBLIQUES
router.post("/signup", userControllers.signUpUser);
router.post("/login", userControllers.login);

// PRIVEES
const { auth } = require("./middleware/auth");

router.post("/register", auth, validateUser, userControllers.register);

// const decisionControllers = require("./controllers/decisionControllers");

// on veut récupérer nos prise de décisions
// router.post("/form/add", formDecisionControllers.addform);

// const commentControllers = require("./controllers/commentControllers");

module.exports = router;
