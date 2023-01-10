const { verifyToken, token } = require("../services/jwt");

const auth = (req, res, next) => {
  if (!token) {
    return res.status(401).json({ error: "Pas de token" });
  }
  if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
  return next();
};

module.exports = {
  auth,
};
