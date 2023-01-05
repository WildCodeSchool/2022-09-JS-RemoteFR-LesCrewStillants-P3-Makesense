const jwt = require("jsonwebtoken");

// TODO: créer la fonction generateToken
function generateToken(user) {
  const payload = { sub: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;

}

// TODO: créer la fonction decodeToken
function decodeToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}

module.exports = {
  generateToken,
  decodeToken,
};
