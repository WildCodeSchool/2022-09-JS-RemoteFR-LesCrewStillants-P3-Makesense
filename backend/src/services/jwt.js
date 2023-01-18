const jwt = require("jsonwebtoken");

// TODO: créer la fonction generateToken
function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    user_role: user.user_role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

// TODO: créer la fonction decodeToken
function decodeToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  generateToken,
  decodeToken,
};
