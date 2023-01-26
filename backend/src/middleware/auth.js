const { decodeToken } = require("../services/jwt");

const auth = (req, res, next) => {
  // eslint-disable-next-line prefer-destructuring
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Pas de token" });
  }
  try {
    const decoded = decodeToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  return false;
};

module.exports = {
  auth,
};
