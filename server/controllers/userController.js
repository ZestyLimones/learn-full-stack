const { User } = require('../models');

module.exports = {
  getAllUsers: async (req, res) => {
    const allUsers = await User.find();
    res.json(allUsers);
  },
  createUser: async (req, res) => {
    const createUser = await User.create(req.body);
    res.json(createUser);
  },
  getUser: async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  },
};
