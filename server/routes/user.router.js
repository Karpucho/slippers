const router = require('express').Router();
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    User.findAll()
      .then((allUsers) => res.json(allUsers))
      .catch((error) => console.log(error));
  });

router
  .route('/:id')
  .put((req, res) => {
    const { id } = req.params;

    User.update(req.body, { where: { id }, returning: true })
      .then((updatedUser) => res.json(updatedUser))
      .catch((error) => res.status(500).json(error));
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    User.destroy({ where: { id } })
      .then((data) => (data ? res.json(id) : res.status(404).json(data)))
      .catch((error) => res.status(500).json(error));
  });

module.exports = router;
