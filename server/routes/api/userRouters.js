const {
  getAllUsers,
  createUser,
  getUser,
} = require('../../controllers/userController');

const router = require('express').Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser);

module.exports = router;
