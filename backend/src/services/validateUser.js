/* eslint-disable camelcase */
const Joi = require("joi");

// je crée mon schéma en regardant la doc de Joi, mon schéma correspond aux champs de ma bdd
const userSchema = Joi.object({
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
  birthday: Joi.date().required(),
  user_role: Joi.string().max(255).required(),
  matricule: Joi.string().alphanum().max(255).required(),
});
// je vérifie tous les champs dans le body de ma requête sur postman
const validateUser = (req, res, next) => {
  const { firstname, lastname, birthday, user_role, matricule } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, birthday, user_role, matricule },
    { abortEarly: false }
  );
  //  si ça ne fonctionne pas j'ai une erreur 422 avec le détail (et non pas 500 sans la vérif)
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};
// j'exporte mon middleware de vérif pour l'ajouter sur ma route post
module.exports = {
  validateUser,
};

// de rien seb c'est cadeau des bisous
