const User = require("../server/models").User;

module.exports = {
  add(req, res) {
    return User
      .create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))

    res.status(201).send({email,username,password});
  },
}
