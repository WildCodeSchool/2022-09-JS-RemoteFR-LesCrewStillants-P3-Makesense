const { verify, hash, argon2id } = require("argon2");
const { generateToken } = require("../services/jwt");
const models = require("../models");

const register = (req, res) => {
  const { pw } = req.body;

  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  hash(pw, hashingOptions)
    .then((hashedPassword) => {
      const user = {
        ...req.body,
        hashedPassword,
      };
      models.user
        .insert(user)
        .then(([rows]) => {
          if (rows.affectedRows === 1) {
            return res.status(201).json({ success: "User saved" });
          }
          return res.status(403).json({ error: "une erreur s'est produite" });
        })
        .catch(() => res.sendStatus(500));
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

const login = async (req, res) => {
  // Ici, je récupère les infos transmisent par le frontend.
  const { email, pw } = req.body;

  // console.warn({ email, pw });
  // Je vais récupère dans ma DB l'utilisateur dont l'email est celui transmis

  // findByEmail(email) -> model findByEmail(email) requête sql pour select l'utilisateur selon son email
  models.user
    .findByEmail(email)
    .then(([[user]]) => {
      // [[user]] => correspond au résulat de ma requête SQL
      // si personne
      if (!user) {
        return res.status(403).json({ error: "User not found" });
      }
      // vérifier le MDP
      verify(user.pw, pw)
        .then((match) => {
          if (match) {
            // 3 je retourne mon token//
            const token = generateToken({ id: user.id, email: user.email });
            return res
              .cookie("user_auth", token, { httpOnly: true, secure: false })
              .status(200)
              .json({ token, sucess: "User logged" });
          }
          return res.status(403).json({ error: "password incorrect" });
        })
        .catch((error) => {
          console.error(error);
        });
      return false;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  register,
  login,
};
